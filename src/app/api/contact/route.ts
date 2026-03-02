import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/services/resend";

export async function POST(req: NextRequest) {
  try {
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
      textMail: message,
    });

    if (result.error) {
      return NextResponse.json(
        { error: "Falha ao enviar.", detail: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro interno.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
