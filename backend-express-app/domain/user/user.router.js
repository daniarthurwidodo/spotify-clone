const express = require('express');
const userService = require('./user.service')

const router = express.Router();

router.post("/login", (req, res) => {
    try {
        let user = userService.getUser()
        res.send({ message: `Hi from login! ${user}` });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

module.exports = router;
