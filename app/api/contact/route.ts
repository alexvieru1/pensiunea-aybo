import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimit.get(ip);
  if (!lastRequest || now - lastRequest > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, now);
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Prea multe cereri. Încearcă din nou în curând." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, phone, email, dates, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: "Toate câmpurile obligatorii trebuie completate." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresa de email nu este validă." },
        { status: 400 }
      );
    }

    const msg = {
      to: process.env.CONTACT_EMAIL!,
      from: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Mesaj nou de la ${name} — Pensiunea Aybo`,
      text: `Nume: ${name}\nTelefon: ${phone}\nEmail: ${email}\nPerioada: ${dates || "Nespecificată"}\n\nMesaj:\n${message}`,
      html: `
        <h2>Mesaj nou de pe site — Pensiunea Aybo</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Perioada:</strong> ${dates || "Nespecificată"}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error:", error);
    return NextResponse.json(
      { error: "A apărut o eroare. Te rugăm să încerci din nou." },
      { status: 500 }
    );
  }
}
