import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
  price: {
    type: Number,
    required: [true, "Please provide a order price"],
  },
  currency: {
    type: String,
  },
  madeAt: {
    type: Date,
    default: Date.now,
  },
  deliveryDate: {
    type: Date,
    default: Date.now,
  },
  requestDescription: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Order must belong to a User"],
  },
  chef: {
    type: Schema.Types.ObjectId,
    ref: "Chef",
    required: [true, "Order must belong to a Chef"],
  },
});

const Order = models.Order || model("Order", OrderSchema);
