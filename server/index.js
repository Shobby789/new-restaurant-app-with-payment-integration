const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DBConnection } = require("./db");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
DBConnection();
const PORT = process.env.PORT || 5000;
require("./models/userSchema");
const STRIPE_URI = process.env.STRIPE_URI;
const stripe = require("stripe")(STRIPE_URI);

app.post("/place-order", async (req, res) => {
  // const { products } = req.body;
  console.log("products >> ", req.body.products);
  console.log("user >> ", req.body.user);

  const line_items = req.body.products?.cartItems.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        images: [product.imageUrl],
      },
      unit_amount: Math.round(product.price * 100),
    },
    quantity: product.cartQuantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: line_items,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.json({ id: session.id });
});

app.use("/api", require("./routes/userRoute"));

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
