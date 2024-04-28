import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    product: {
      type: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
          },
          count: Number,
          price: Number,
        },
      ],
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    coupon: String,
    transactionId: String,
    status: {
      type: String,
      enum: ["ORDERED", "SHIPPED", "DELIVERED", "CANCELLED"],
      default: "ORDERED",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
