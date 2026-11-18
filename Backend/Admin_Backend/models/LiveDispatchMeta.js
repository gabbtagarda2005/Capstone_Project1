const mongoose = require("mongoose");

/** Singleton doc holding the live-dispatch holiday banner — collection: live_dispatch_meta. */
const liveDispatchMetaSchema = new mongoose.Schema(
  {
    _id: { type: String, default: "singleton" },
    holidayBanner: { type: mongoose.Schema.Types.Mixed, default: null },
  },
  { minimize: false }
);

module.exports = mongoose.model("LiveDispatchMeta", liveDispatchMetaSchema, "live_dispatch_meta");
