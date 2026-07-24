window.APP_CONFIG = {
  // n8n webhook that accepts POST { action: 'create'|'update'|'cancel', ... }
  intakeWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/intake',

  // n8n webhook that accepts GET ?tripId=T-0001 and returns the trip's current fields
  lookupWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/trip-lookup',

  // n8n webhook that accepts GET (no params) and returns active drivers as
  // [{ driverId, name }] for respond.html's calendar-origin driver picker
  driversWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/drivers',

  // n8n webhook that accepts POST { tripId, action, ... } from respond.html
  respondWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/respond',

  // Sent as the X-Dispatch-Secret header on every request, and used by the
  // client-side gate below. This is a deterrent against casual/wrong-link
  // access for an internal department tool, NOT real security — anyone who
  // loads this page can read this value from the page source or network
  // tab. Real enforcement of who can write to the Sheet happens in n8n,
  // which should reject any request missing/mismatching this header.
  sharedSecret: 'd822cf3693623cf35003ff78651ac8f7f80a67b17b4abaa7570b2bb3ce3b651b'
};
