const { Request } = require('../models/request.model');

const services = {}

services.create = async (data) => {
  return await Request.create(data);
};

services.getAll = async () => {
  return await Request.findAll();
};

services.getById = async (id) => {
  return await Request.findByPk(id);
};

services.update = async (id, data) => {
  return await Request.update(data, { where: { id } });
};

services.delete = async (id) => {
  return await Request.destroy({ where: { id } });
};

module.exports = { RequestService: services }