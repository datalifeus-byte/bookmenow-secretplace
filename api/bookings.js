export default async function handler(req, res) {
  try {
    const { from, to } = req.query;

    if (!from) {
      return res.status(400).json({
        error: "Параметр from обязателен"
      });
    }

    const params = new URLSearchParams();
    params.set("serviceDateFrom", from);

    if (to) {
      params.set("serviceDateTo", to);
    }

    const response = await fetch(
      `https://api.bookmenow.pro/v1/external/serviceOrders?${params.toString()}`,
      {
        headers: {
          "content-type": "application/json",
          "x-tenant-name": process.env.BOOKMENOW_TENANT,
          "x-api-token": process.env.BOOKMENOW_API_TOKEN
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "BookMeNow API error",
        details: data
      });
    }

    const byStatus = {};

    for (const booking of data) {
      const status = booking.status || "unknown";
      byStatus[status] = (byStatus[status] || 0) + 1;
    }

    return res.status(200).json({
      from,
      to: to || null,
      totalBookings: data.length,
      byStatus
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
}
