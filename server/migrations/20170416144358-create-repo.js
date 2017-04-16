module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('repos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      last_report_date: {
        type: Sequelize.DATE
      },
      default_report_branch: {
        type: Sequelize.STRING
      },
      report: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.STRING,
        references: {
          model: 'users',
          referenceKey: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: false
      }
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('repos');
  }
};