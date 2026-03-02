import { Resend } from 'resend';

export interface MailContent {
  fromMail: string;
  subjectMail: string;
  textMail: string;
}

export async function sendEmail(content: MailContent) {
  const apiKey = process.env.RESEND_API_KEY ?? "";
  const mailfrom = process.env.RESEND_SENTFROM ?? "";
  const mailto = process.env.RESEND_SENDTO ?? "";

  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: mailfrom,
    to: mailto,
    replyTo: content.fromMail,
    subject: content.subjectMail,
    html: `<p>${content.textMail}</p>`,
  });
}