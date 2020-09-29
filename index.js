"use strict";

const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 8000;

const pushNotification = (req, res) => {
  res.json({ text: "hi" });
};

router.get("/", pushNotification);
router.get("/push", pushNotification);
router.post("/push", pushNotification);

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
