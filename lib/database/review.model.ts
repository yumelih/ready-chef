import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface ReviewType extends Document {
  review: string;
  rating: number;
  user: Schema.Types.ObjectId;
  chef: Schema.Types.ObjectId;
  madeAt: Date;
}

const reviewSchema = new Schema(
  {
    review: {
      type: String,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a User"],
    },
    chef: {
      type: Schema.Types.ObjectId,
      ref: "Chef",
      required: [true, "Review must belong to a Chef"],
    },
    madeAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

reviewSchema.pre<ReviewType>(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

const Review = models.Review || model("Review", reviewSchema);

export default Review;
