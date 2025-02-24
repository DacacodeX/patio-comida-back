const { RequestService } = require("../services/request.service");
const Joi = require("joi");

const controllers = {}

const requestSchema = Joi.object({
  userId: Joi.number().integer().positive().required(),
  type: Joi.string().valid('desaparecido', 'encontrado', 'otro').required(),
  name: Joi.string().min(2).max(100).required(),
  lastName: Joi.string().min(2).max(100).required(),
  age: Joi.number().integer().min(0).optional(),
  gender: Joi.string().valid('masculino', 'femenino', 'otro', 'desconocido').optional(),
  documents: Joi.string().optional(),
  affectedStatus: Joi.string().valid('a salvo', 'herido', 'fallecido', 'desconocido').optional(),
  lastSightingPlace: Joi.string().optional(),
  descriptionPhysics: Joi.string().optional(),
  additionalNotes: Joi.string().optional(),
  status: Joi.string().valid('pendiente', 'aprobado', 'rechazado', 'resuelto').default('pendiente'),
  comments: Joi.string().optional()
});


controllers.create = async (req, res) => {
  const { error } = requestSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const request = await RequestService.create(req.body);
    res.status(201).send(request);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.getAll = async (req, res) => {
  try {
    const requests = await RequestService.getAll();
    res.send(requests);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.getById = async (req, res) => {
  try {
    const request = await RequestService.getById(req.params.id);
    if (!request) return res.status(404).send("solicitud no encontrada");
    res.send(request);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.update = async (req, res) => {
  const { error } = requestSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const updated = await RequestService.update(
      req.params.id,
      req.body
    );
    if (updated[0] === 0)
      return res.status(404).send("Solicitud no encontrada");
    res.send("Solicitud actualizada exitosamente");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

controllers.delete = async (req, res) => {
  try {
    const deleted = await RequestService.delete(req.params.id);
    if (deleted === 0) return res.status(404).send("Solicitud no encontrada");
    res.send("Solicitud eliminada exitosamente");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { RequestController: controllers}