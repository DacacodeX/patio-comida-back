const { UserService } = require("../services/user.service");
const Joi = require("joi");
const {User} = require("../models/user.model");

const controllers = {}

const userSchema = Joi.object({
    id: Joi.number().integer().positive(),
    name: Joi.string().max(255).required(),
    lastName: Joi.string().max(255).required(),
    email: Joi.string().max(255),
});

controllers.getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    res.send(users);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.getById = async (req, res) => {
  try {
    const client = await UserService.getById(req.params.id);
    if (!client) return res.status(404).send("Usuario no encontrado");
    res.send(client);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.update = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updated = await UserService.update(
      req.params.id,
      req.body
    );
    if (updated[0] === 0)
      return res.status(404).send("Usuario no encontrado");
    res.send("Usuario actualizado exitosamente");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.delete = async (req, res) => {
  try {
    const deleted = await UserService.delete(req.params.id);
    if (deleted === 0) return res.status(404).send("Usuario no encontrado");
    res.send("Usuario eliminado exitosamente");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { UserController: controllers }