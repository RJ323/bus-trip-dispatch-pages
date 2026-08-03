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

  // Supabase project URL (bare, no /rest/v1/ suffix — supabase-js adds that).
  supabaseUrl: 'https://tdjhliwrqrztdumslvgr.supabase.co',

  // Supabase anon/public API key — protected by RLS, see supabase-setup.sql.
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkamhsaXdycXJ6dGR1bXNsdmdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNjc3NjIsImV4cCI6MjEwMDg0Mzc2Mn0.hd1VzYJdOK1XYjK2cj_PFmGwILk1vQwfPT8k19Fiaac',

  // n8n webhook that accepts POST { id, name, role, contact, email } from
  // auth.html after every successful login/signup. Upserts the person into
  // the matching Drivers/Riders/Vehicle Escorts roster tab (matched by
  // email, so repeat logins don't create duplicate rows) — the same roster
  // tabs Trip Intake already broadcasts to.
  authHandoffWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/auth-handoff',

  // n8n webhook that accepts GET ?rosterId=D-0001|R-0001|E-0001 and returns
  // this person's upcoming trips: [{ tripId, tripDate, pickupTime,
  // pickupLocation, dropoffLocation, durationMin, myStatus }], where
  // myStatus is 'available' (open, not yet responded) or 'assigned' (they
  // already accepted). Powers the "Your Trips" list in auth.html.
  myTripsWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/my-trips',

  // n8n webhook that accepts POST { firstName, lastName, phone, email, role,
  // consentAt } from scheduled-trips.html's one-time (no login) registration
  // form. role is 'Trip Summary Roster' or 'Trip Supervisor'.
  scheduledTripsWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/scheduled-trips-signup',

  // n8n webhook returning every upcoming trip with full per-role assignment
  // detail — powers auth.html's read-only overview for Trip Summary
  // Roster/Trip Supervisor accounts.
  tripsOverviewWebhookUrl: 'https://jarezz.app.n8n.cloud/webhook/trips-overview',

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
