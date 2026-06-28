import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { source, ...data } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId || chatId === 'YOUR_CHAT_ID_HERE') {
      console.error('Telegram Bot Token or Chat ID is missing or invalid.');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    let message = `New Inquiry from: ${source}\n\n`;
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        // Format key from camelCase or snake_case to Title Case (simple approach)
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        message += `*${formattedKey}*: ${value}\n`;
      }
    }

    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json({ error: 'Failed to send message to Telegram' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
