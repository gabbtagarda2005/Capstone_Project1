const mongoose = require("mongoose");

/**
 * One published trip row on the live dispatch / passenger board — collection: live_dispatch_blocks.
 * `id` (not Mongo `_id`) is the canonical identifier used throughout routes/liveDispatch.js and the
 * GPS/geofence services, since it originated as a randomUUID() string before this moved to Mongo.
 */
const liveDispatchBlockSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    busId: { type: String, required: true, index: true },
    routeId: { type: String, required: true },
    routeLabel: { type: String, default: "" },
    departurePoint: { type: String, default: "—" },
    scheduledDeparture: { type: String, default: "" },
    serviceDate: { type: String, default: undefined },
    status: { type: String, default: "on-time" },
    arrivalDetectedAt: { type: String, default: undefined },
    arrivalTerminalName: { type: String, default: undefined },
    gate: { type: String, default: undefined },
    arrivalLockedEta: { type: String, default: undefined },
    currentTerminalGate: { type: String, default: undefined },
    etaMinutes: { type: Number, default: undefined },
    etaTargetIso: { type: String, default: undefined },
    nextTerminal: { type: String, default: undefined },
    createdAt: { type: String, default: undefined },
    updatedAt: { type: String, default: undefined },
  },
  { minimize: true, strict: false }
);

module.exports = mongoose.model("LiveDispatchBlock", liveDispatchBlockSchema, "live_dispatch_blocks");
