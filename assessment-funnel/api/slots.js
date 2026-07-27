// GET /api/slots?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&timezone=America/New_York
// Returns GHL calendar free-slots for the given range.
export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { startDate, endDate, timezone = 'America/New_York' } = req.query || {};
  if (!startDate || !endDate) {
    return res.status(400).json({ error: 'startDate and endDate required' });
  }

  const calendarId = process.env.GHL_CALENDAR_ID;
  const apiKey = process.env.GHL_API_KEY;
  if (!calendarId || !apiKey) {
    return res.status(500).json({ error: 'Calendar not configured' });
  }

  // GHL expects epoch milliseconds.
  const startMs = new Date(startDate).getTime();
  const endMs = new Date(endDate + 'T23:59:59').getTime();

  const params = new URLSearchParams({
    startDate: String(startMs),
    endDate: String(endMs),
    timezone,
  });

  try {
    const r = await fetch(
      `https://services.leadconnectorhq.com/calendars/${calendarId}/free-slots?${params}`,
      { headers: { Authorization: `Bearer ${apiKey}`, Version: '2021-04-15', Accept: 'application/json' } }
    );
    const data = await r.json();
    res.setHeader('Cache-Control', 'public, max-age=300');
    return res.status(r.ok ? 200 : r.status).json(data);
  } catch (err) {
    console.error('slots error', err);
    return res.status(502).json({ error: 'Failed to load availability' });
  }
}
