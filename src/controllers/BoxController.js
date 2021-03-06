const Box = require("../models/Box");

class BoxController {
  async index(req, res) {
    const boxes = await Box.find({});
    return res.json(boxes);
  }
  async store(req, res) {
    const box = await Box.create({ title: req.body.title });
    return res.json(box);
  }

  async show(req, res) {
    const box = await Box.findById(req.params.id).populate({
      path: "files",
      options: {
        sort: { createAt: -1 }
      }
    });
    return res.json(box);
  }
}

module.exports = new BoxController();
