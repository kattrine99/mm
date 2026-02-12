import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        if (req.method !== "POST") {
        return res.status(405).json({ ok: false, description: "Method Not Allowed" });
        }
        
        const { name, company, phone, comment } = req.body as {
            name: string; company: string; phone: string; comment?: string;
        };

        const token = process.env.TG_BOT_TOKEN!;
        const chatId = process.env.TG_CHAT_ID!; 

        const text =
            `📝 Новая заявка
👤 Имя: ${name}
🏢 Компания: ${company}
📞 Телефон: ${phone}
💬 Комментарий: ${comment || '—'}`;

        const tgResp = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
        });

        const data = await tgResp.json();
        if (!data.ok) {
            return res.status(500).json({ ok: false, error: data.description || 'Telegram error' });
        }

        res.status(200).json({ ok: true });
    } catch (e: any) {
        res.status(500).json({ ok: false, error: e?.message || 'Server error' });
    }
}