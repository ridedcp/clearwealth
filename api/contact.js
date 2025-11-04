export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const token = process.env.FORMSUBMIT_TOKEN; // <- sin VITE_
  const { fullName, email, message } = req.body || {};

  // Reenvía al proveedor con tu token secreto
  const r = await fetch('https://api.tu-proveedor-forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ fullName, email, message }),
  });

  if (!r.ok) return res.status(500).json({ ok: false });
  return res.status(200).json({ ok: true });
}
