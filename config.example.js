// Copy this file to config.js (same folder) and fill in real values.
// config.js is gitignored — never commit real webhook URLs or the shared secret.

window.APP_CONFIG = {
  // n8n webhook that accepts POST { action: 'create'|'update'|'cancel', ... }
  intakeWebhookUrl: 'https://your-n8n-instance/webhook/intake',

  // n8n webhook that accepts GET ?tripId=T-0001 and returns the trip's current fields
  lookupWebhookUrl: 'https://your-n8n-instance/webhook/trip-lookup',

  // n8n webhook that accepts GET (no params) and returns active drivers as
  // [{ driverId, name }] — names only, never phone numbers — for respond.html's
  // calendar-origin driver picker
  driversWebhookUrl: 'https://your-n8n-instance/webhook/drivers',

  // n8n webhook that accepts POST { tripId, action: 'accept'|'decline', ... }
  // from respond.html (either { driverId } for personalized links, or
  // { driverName, last4 } for calendar-origin links)
  respondWebhookUrl: 'https://your-n8n-instance/webhook/respond',

  // Sent as the X-Dispatch-Secret header on every request, and used by the
  // client-side gate below. This is a deterrent against casual/wrong-link
  // access for an internal department tool, NOT real security — anyone who
  // loads this page can read this value from the page source or network
  // tab. Real enforcement of who can write to the Sheet happens in n8n,
  // which should reject any request missing/mismatching this header.
  sharedSecret: 'replace-with-shared-secret'
};
