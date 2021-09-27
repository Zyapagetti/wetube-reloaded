import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, trim:true, required: true,  maxLength: 100},
  description: { type: String,trim:true,  required: true, maxLength: 200},
  createdAt: { type: Date, default: Date.now, required: true },
  hashtags: [{ type: String, trim:true }],
  meta: {
    views: { type: Number, Default: 0, required: true },
    rating: { type: Number, Default: 0, required: true },
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
