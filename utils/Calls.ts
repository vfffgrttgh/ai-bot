"use server"
export async function POST(message: string) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost", // or your website
      "X-Title": "My JavaScript App"
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  const answer = data.choices[0].message.content;

  return answer;
}