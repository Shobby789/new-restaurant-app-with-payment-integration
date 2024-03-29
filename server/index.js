const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DBConnection } = require("./db");
const app = express();
app.use(cors());
app.use(bodyParser.json());
DBConnection();
require("./models/userSchema");
const stripe = require("stripe")(
  "sk_test_51OyvorBEJbyBfiqfId7HxnAVWEvQ4N6egfyEqA25HF0WatTUzhcGydxz0FlDAxulFjvlLuZGYfEZVnrwiQA6KmyZ00SzP0Xlgs"
);

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

app.listen(3001, () => {
  console.log("server running");
});
