import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  // Check for empty values
  if (!name || !email || !password || !password.length) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email: email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      user: {
        email: user.email,
        name: user.name,
        lastName: user.lastName,
      },
      token: token,
    },
  });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
