const mongooose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../data/data");
const UserModel = mongooose.model("Users");

module.exports.CreateUser = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  //   console.log("efefwef >> ", req.body);
  try {
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(200).send({ message: "Email already exists" });
    }
    await UserModel.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    res.status(200).send({ message: "User created successfully" });
  } catch (error) {
    console.log("register server error >> ", error);
    res.status(500).send({ message: error });
  }
};

module.exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUser = await UserModel.findOne({ email });
    if (!isUser) {
      return res.status().send({ message: "Email does not exists" });
    }
    if (await bcrypt.compare(password, isUser.password)) {
      const accessToken = jwt.sign({ email: isUser.email }, SECRET_KEY, {
        expiresIn: "1hr",
      });

      if (res.status(201)) {
        return res.status(200).send({
          message: "Login Successfull",
          data: { name: isUser.name, email: isUser.email },
          accessToken,
        });
      } else {
        return res.status(401).send({ message: "Invalid email or password" });
      }
    }
    res.status(201).send({ message: "Invalid email or password" });
  } catch (error) {
    console.log("login server error >> ", error);
    res.status(500).send({ message: error });
  }
};
