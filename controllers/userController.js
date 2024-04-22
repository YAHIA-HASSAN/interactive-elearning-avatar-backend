const user = require("../models/userModel");

// Create and Save a new User
exports.addNewUser = async (req, res) => {
  try {
    const newUser = new user({
      U_FirstName: req.body.U_FirstName,
      U_MiddleName: req.body.U_MiddleName,
      U_LastName: req.body.U_LastName,
      U_Email: req.body.U_Email,
      U_Password: req.body.U_Password,
      U_Age: req.body.U_Age,
      U_Type: req.body.U_Type,
    });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(400).send({ error: error.message }); // Send a generic error message
  }
};

// Retrieve and return a single user from the database.
exports.getUserByEmail = async (req, res) => {
  try {
    const userFromDB = await user.findOne({ U_Email: req.body.U_Email });
    if (!userFromDB) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(userFromDB);
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Internal server error" }); // Generic error for unexpected issues
  }
};

// Retrieve and return all users from the database.
exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.find();
    res.status(200).send(allUsers);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Internal server error" }); // Generic error for unexpected issues
  }
};

// Update a user identified by the Email in the request
exports.updateUserByEmail = async (req, res) => {
  try {
    const userUpdated = await user.findOneAndUpdate(
      { U_Email: req.body.U_Email },
      req.body,
      { new: true } // Return the updated document
    );
    if (!userUpdated) {
      return res.status(404).send({
        message: "User not found with email " + req.body.U_Email,
      });
    }
    res.status(200).send(userUpdated);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Internal server error" }); // Generic error for unexpected issues
  }
};

// Delete a user with the specified Email in the request
exports.deleteUserByEmail = async (req, res) => {
  try {
    const userDeleted = await user.findOneAndRemove({ U_Email: req.body.U_Email });
    if (!userDeleted) {
      return res.status(404).send({
        message: "User not found with email " + req.body.U_Email,
      });
    }
    res.status(200).send(userDeleted);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ error: "Internal server error" }); // Generic error for unexpected issues
  }
};
