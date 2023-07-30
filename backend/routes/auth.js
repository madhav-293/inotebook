const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require("bcryptjs");
const JWT_SECRET = "cvgbhnjmouvyctx";
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

//Create a user using :POST "/api/auth/createUser"
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exist." });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      res.json(authtoken);
    } catch (err) {
      console.log(err);
      res.status(500).send("Some error occured");
    }
  }
);

module.exports = router;

//.save() bypass the schema validation on the other hand .create doesnt do that it first check the schema constraints and then save the data
//Rainbow table :: it consist of hash and password(hackers usually have this kind of table to hack ur account they have this to get the common password from the hashvalue)(to avoid we will use salt)

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try login with correct password" });
      }
      const passwordCompare = bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please try login with correct password" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);

      res.json(authtoken);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


//Route: 3 Get loggegin user details
router.post("/getuser",fetchuser,async (req, res) => {
  try {
      
      let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
    } catch (error) {
      console.log(error.message)
      res.status(500).send("Internal Server Error")
    }
  });
  