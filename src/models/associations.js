const { User } = require("./user.model");
const { Request } = require("./request.model");

// 🔹 Relationship: User → Request
User.hasMany(Request, { foreignKey: 'userId', as: 'requests', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
Request.belongsTo(User, { foreignKey: 'userId', as: 'users', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });

module.exports = {}; // Only executes the associations
