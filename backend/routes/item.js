const Item = require("../models/Item");
const router = require("express").Router();

router.get("/", async(req, res) => {
  //console.log("items",req)
  const items = await Item.find();
  const grades = items.map((item) => item.grade).reduce((u, i) => u.includes(i) ? u : [...u, i], []).filter((i) => i !== undefined);
  //console.log(items.filter((item) => item.grade === "일반").sort((a, b) => a.options.default.filter((item) => item.name==="요구 레벨")[0].value - b.options.default.filter((item) => item.name==="요구 레벨")[0].value));
//   [
//     ...items.filter((item) => item.grade === "일반").sort((a, b) => a.options.default.map(item => item.name===undefined ? [{name:"요구 레벨",value:0}, ...item]:item).filter((item) => item.name==="요구 레벨")[0].value - b.options.default.filter((item) => item.name==="요구 레벨")[0].value),
//     ...items.filter((item) => item.grade === "유니크").sort((a, b) => a.options.default.map(item => item.name===undefined ? [{name:"요구 레벨",value:0}, ...item]:item).filter((item) => item.name==="요구 레벨")[0].value - b.options.default.filter((item) => item.name==="요구 레벨")[0].value),
//     ...items.filter((item) => item.grade === "세트").sort((a, b) => a.options.default.map(item => item.name===undefined ? [{name:"요구 레벨",value:0}, ...item]:item).filter((item) => item.name==="요구 레벨")[0].value - b.options.default.filter((item) => item.name==="요구 레벨")[0].value),
//     ...items.filter((item) => item.grade === "룬어").sort((a, b) => a.options.level - b.options.level),
//     ...items.filter((item) => item.grade === "룬").sort((a, b) => a.options.level - b.options.level)
//  ]
  res.status(200).json(items);
});

router.get("/:id", async(req, res) => {
  const item = await Item.findById(req.params.id);
  res.status(200).json(item);
});
module.exports = router;