window.APP_CONFIG = {
  // n8n webhook that accepts POST { action: 'create'|'update'|'cancel', ... }
  intakeWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/intake',

  // n8n webhook that accepts GET ?tripId=T-0001 and returns the trip's current fields
  lookupWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/trip-lookup',

  // n8n webhook that accepts GET (no params) and returns upcoming, non-cancelled
  // trips as [{ tripId, tripDate, pickupTime, pickupLocation, status }], sorted
  // by date/time — powers intake.html's "Load Existing Trip" picker
  tripsListWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/trips-list',

  // n8n webhooks that accept GET (no params) and return the active roster as
  // [{ driverId|riderId|escortId, name }] for respond.html's picker fallback
  driversWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/drivers',
  ridersWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/riders',
  escortsWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/vehicle-escorts',

  // n8n webhook that accepts POST { tripId, action, ... } from respond.html
  respondWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/respond',

  // Sent as the X-Dispatch-Secret header on every request. intake.html also
  // uses this for its passphrase gate; respond.html no longer has a gate
  // (drivers already prove identity via the personalized link / last-4
  // check), but still sends this header automatically on every request.
  // This is a deterrent against casual/wrong-link access for an internal
  // department tool, NOT real security — anyone who loads a page can read
  // this value from the page source or network tab. Real enforcement of
  // who can write to the Sheet happens in n8n, which rejects any request
  // missing/mismatching this header.
  sharedSecret: '5290'
};
