"use server";

export interface IRAChatResponse {
  response: string;
  intent: string;
  confidence: number;
  knowledge_ids: string[];
  cache_hit: boolean;
  suggested_actions: { label: string; query: string }[];
}

export async function sendIRAMessage(message: string, sessionId: string): Promise<IRAChatResponse> {
  const backendUrl = process.env.IRA_API_URL;
  
  try {
    const res = await fetch(`${backendUrl}/api/v1/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        session_id: sessionId,
      }),
    });

    if (!res.ok) {
      if (res.status === 429) {
        throw new Error("Rate limit exceeded. Please wait before sending more messages.");
      }
      throw new Error("Failed to communicate with IRA backend.");
    }

    const data = await res.json();
    if (data.response) {
      // Fix malformed markdown links like "[Text]"(url) returned by some models
      data.response = data.response.replace(/"\[(.*?)\]"\((.*?)\)/g, '[$1]($2)');
    }
    return data;
  } catch (error: any) {
    console.error("IRA Server Action Error:", error);
    throw new Error(error.message || "An unexpected error occurred.");
  }
}
