const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL as string;

export async function getUsers() {
  const res = await fetch(`${GAS_URL}?action=getUsers`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function addUser(payload: { name: string; email: string }) {
  const res = await fetch(`${GAS_URL}?action=addUser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}
