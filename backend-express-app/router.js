const express = require('express');
const userRouter = require('./domain/user/user.router');

const router = express.Router();

router.get('/ack', async (req, res) => {
  try {
    res.send({ message: "Hi Mom!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.use('/user', userRouter);

module.exports = router;
