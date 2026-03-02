import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const mailfrom: string = process.env.RESEND_SENTFROM ?? "";
const mailto: string = process.env.RESEND_SENDTO ?? "";

export interface MailContent {
  fromMail: string;
  subjectMail: string;
  textMail: string;
}

export async function sendEmail(content: MailContent) {
  return resend.emails.send({
    from: mailfrom,
    to: mailto,
    replyTo: content.fromMail,
    subject: content.subjectMail,
    html: `<p>${content.textMail}</p>`,
  });
}