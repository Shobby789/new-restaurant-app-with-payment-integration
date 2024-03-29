const mongooose = require("mongoose");

const UserSchema = new mongooose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    collection: "Users",
  }
);

mongooose.model("Users", UserSchema);
