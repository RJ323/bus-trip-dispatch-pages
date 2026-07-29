// Copy this file to config.js (same folder) and fill in real values.
// config.js is gitignored — never commit real webhook URLs or the shared secret.

window.APP_CONFIG = {
  // n8n webhook that accepts POST { action: 'create'|'update'|'cancel', ... }
  intakeWebhookUrl: 'https://your-n8n-instance/webhook/intake',

  // n8n webhook that accepts GET ?tripId=T-0001 and returns the trip's current fields
  lookupWebhookUrl: 'https://your-n8n-instance/webhook/trip-lookup',

  // n8n webhook that accepts GET (no params) and returns upcoming, non-cancelled
  // trips as [{ tripId, tripDate, pickupTime, pickupLocation, status }], sorted
  // by date/time — powers intake.html's "Load Existing Trip" picker
  tripsListWebhookUrl: 'https://your-n8n-instance/webhook/trips-list',

  // n8n webhooks that accept GET (no params) and return the active roster as
  // [{ driverId|riderId|escortId, name }] — names only, never phone numbers —
  // for respond.html's picker fallback (used when a link has no
  // driverId/riderId/escortId, e.g. ?respondAs=rider)
  driversWebhookUrl: 'https://your-n8n-instance/webhook/drivers',
  ridersWebhookUrl: 'https://your-n8n-instance/webhook/riders',
  escortsWebhookUrl: 'https://your-n8n-instance/webhook/vehicle-escorts',

  // n8n webhook that accepts POST { tripId, action: 'accept'|'decline', ... }
  // from respond.html: { driverId }/{ riderId }/{ escortId } for personalized
  // links, or { driverName, last4 }/{ riderName, last4 }/{ escortName, last4 }
  // for picker-fallback links
  respondWebhookUrl: 'https://your-n8n-instance/webhook/respond',

  // Supabase project URL — the bare project URL, NOT the /rest/v1/ REST
  // endpoint (supabase-js appends that itself). Find it in Supabase:
  // Project Settings > API > Project URL.
  supabaseUrl: 'https://your-project-ref.supabase.co',

  // Supabase anon/public API key (Project Settings > API > anon public).
  // Safe to ship to the browser — it's only as strong as the table's Row
  // Level Security policies (see supabase-setup.sql at the project root).
  supabaseAnonKey: 'replace-with-supabase-anon-key',

  // n8n webhook that accepts POST { id, name, role, contact, email } right
  // after a successful login/signup in auth.html. Upserts the person into
  // the matching Drivers/Riders/Vehicle Escorts roster tab (matched by
  // email, so repeat logins don't create duplicate rows) — the same
  // roster tabs Trip Intake already broadcasts to. auth.html silently
  // skips the call while this URL still contains "your-n8n-instance".
  authHandoffWebhookUrl: 'https://your-n8n-instance/webhook/auth-handoff',

  // n8n webhook that accepts GET ?rosterId=D-0001|R-0001|E-0001 and returns
  // this person's upcoming trips: [{ tripId, tripDate, pickupTime,
  // pickupLocation, dropoffLocation, durationMin, myStatus }], where
  // myStatus is 'available' (open, not yet responded) or 'assigned' (they
  // already accepted). Powers the "Your Trips" list in auth.html.
  myTripsWebhookUrl: 'https://your-n8n-instance/webhook/my-trips',

  // Sent as the X-Dispatch-Secret header on every request. intake.html also
  // uses this for its passphrase gate; respond.html no longer has a gate
  // (drivers already prove identity via the personalized link / last-4
  // check), but still sends this header automatically on every request.
  // This is a deterrent against casual/wrong-link access for an internal
  // department tool, NOT real security — anyone who loads a page can read
  // this value from the page source or network tab. Real enforcement of
  // who can write to the Sheet happens in n8n, which rejects any request
  // missing/mismatching this header.
  sharedSecret: 'replace-with-shared-secret'
};
