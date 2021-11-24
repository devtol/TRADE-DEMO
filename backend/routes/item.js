const Item = require("../models/Item");
const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("asdsa");
  const items = await Item.find();
  res.status(200).json(items);
});

module.exports = router;