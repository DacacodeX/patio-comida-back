const { User } = require('../models/user.model');

const services = {}

services.create = async (data) => {
  return await User.create(data);
};

services.getAll = async () => {
  return await User.findAll();
};

services.getById = async (id) => {
  return await User.findByPk(id);
};

services.update = async (id, data) => {
  return await User.update(data, { where: { id } });
};

services.delete = async (id) => {
  return await User.destroy({ where: { id } });
};

module.exports = { UserService: services }