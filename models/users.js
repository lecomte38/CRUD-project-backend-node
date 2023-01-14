'use strict';

// This is the model for the User table.
module.exports = function(sequelize, Sequelize) {

  // This is creating a table called Users with the columns id, firstname, and lastname.
  const User = sequelize.define('Users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER
    },
    firstname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    lastname: {
      allowNull: false,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  });

  // Returning the User table.
  return User;
};