const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const Boys = await tables.Boys.readAll();

    res.json(Boys);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const Boys = await tables.Boys.read(req.params.id);

    if (Boys == null) {
      res.sendStatus(404);
    } else {
      res.json(Boys);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const Boys = { ...req.body, id: req.params.id };

  try {
    await tables.Boys.update(Boys);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const Boys = req.body;

  try {
    const insertId = await tables.boys.create(Boys);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Boys.delete(req.params.id);

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
