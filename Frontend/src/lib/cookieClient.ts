export function getCookieClient() {
  if (typeof window === "undefined") return null;

  const cookies = document.cookie.split('; ');
  const sessionCookie = cookies.find(row => row.startsWith('session='));

  if (sessionCookie) {
    return sessionCookie.split('=')[1];
  }

  return null;
}