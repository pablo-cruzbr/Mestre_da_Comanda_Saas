export function getCookieClient() {
  if (typeof window === "undefined") return null;

  // Pegamos todos os cookies do navegador
  const cookies = document.cookie.split('; ');
  // Procuramos o que começa com "session="
  const sessionCookie = cookies.find(row => row.startsWith('session='));

  if (sessionCookie) {
    return sessionCookie.split('=')[1];
  }

  return null;
}