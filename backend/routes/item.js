const Item = require("../models/Item");
const router = require("express").Router();

router.get("/", async(req, res) => {
  //console.log("items",req)
  const items = await Item.find();
  const grades = items.map((item) => item.grade).reduce((u, i) => u.includes(i) ? u : [...u, i], []).filter((i) => i !== undefined);
  res.status(200).json(items);
});

router.get("/:id", async(req, res) => {
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
});
module.exports = router;