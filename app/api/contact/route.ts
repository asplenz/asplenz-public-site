import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

let lastSent = 0;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const company = String(body?.company || '').trim();
    const message = String(body?.message || '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email.' }), { status: 400 });
    }

    const now = Date.now();
    if (now - lastSent < 5000) {
      return new Response(JSON.stringify({ error: 'Too many requests, please wait.' }), { status: 429 });
    }
    lastSent = now;

    const env = process.env as Record<string, string | undefined>;
    const SMTP_HOST = env.SMTP_HOST;
    const SMTP_PORT = env.SMTP_PORT;
    const SMTP_USER = env.SMTP_USER;
    const SMTP_PASS = env.SMTP_PASS;
    const CONTACT_TO = env.CONTACT_TO;
    const CONTACT_FROM = env.CONTACT_FROM;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM) {
      console.error('Missing environment variables.');
      return new Response(JSON.stringify({ error: 'Server configuration incomplete.' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    const content = `New message via Asplenz site:

Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
`;

    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Asplenz Website Contact — ${name}`,
      text: content
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Internal error.' }), { status: 500 });
  }
}
