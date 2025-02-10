import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const  VideoSchema = new Schema({
   id: {
    type: String,
    unique: true,
    trim: true,
    required: true,
   },
   videoFile: {
    type: String,
    required: true
   },
   thumbnail: {
    type: String,
    required: true
   },
   owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
   },
   title: {
    type: String,
    required: true,
    index: true
   },
   description: {
    type: String,
    required: true,
   },
   duration:{
    type: Number,
    required: true
   },
   views:{
    type: Number,
    default: 0
   },
   isPublished: {
    type: Boolean,
    default: 0
   }
},{
    timestamps: true
})

VideoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , VideoSchema)