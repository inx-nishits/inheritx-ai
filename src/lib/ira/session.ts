export function getOrGenerateSessionId(): string {
  const SESSION_KEY = "inx_ira_session_id";
  if (typeof window === "undefined") {
    return "server-session";
  }
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export function resetSessionId(): string {
  const SESSION_KEY = "inx_ira_session_id";
  const newSessionId = crypto.randomUUID();
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SESSION_KEY, newSessionId);
  }
  return newSessionId;
}
