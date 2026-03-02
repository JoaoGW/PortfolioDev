import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/resend";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Campos obrigatórios ausentes." },
      { status: 400 }
    );
  }

  const result = await sendEmail({
    fromMail: email,
    subjectMail: subject,
    textMail: `De: ${name}\n\n${message}`,
  });

  if (result.error) {
    return NextResponse.json({ error: "Falha ao enviar.", detail: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
