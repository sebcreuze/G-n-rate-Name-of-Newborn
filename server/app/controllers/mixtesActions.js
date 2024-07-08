const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const Mixtes = await tables.Mixtes.readAll();

    res.json(Mixtes);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const Mixtes = await tables.Mixtes.read(req.params.id);

    if (Mixtes == null) {
      res.sendStatus(404);
    } else {
      res.json(Mixtes);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const Mixtes = { ...req.body, id: req.params.id };

  try {
    await tables.Mixtes.update(Mixtes);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const Mixtes = req.body;

  try {
    const insertId = await tables.Mixtes.create(Mixtes);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.Mixtes.delete(req.params.id);

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
