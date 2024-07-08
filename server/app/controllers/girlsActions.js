const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const Girls = await tables.Girls.readAll();

    res.json(Girls);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const Girls = await tables.Girls.read(req.params.id);

    if (Girls == null) {
      res.sendStatus(404);
    } else {
      res.json(Girls);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const Girls = { ...req.body, id: req.params.id };

  try {
    await tables.Girls.update(Girls);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const Girls = req.body;

  try {
    const insertId = await tables.Girls.create(Girls);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Girls.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
