import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'purchase_orders_db',   // Database name
  process.env.DB_USER || 'root',                 // MySQL user
  process.env.DB_PASSWORD || 'root',             // MySQL password
  {
    host: process.env.DB_HOST || 'localhost',    // MySQL host
               // MySQL port
    dialect: 'mysql',                            // Database dialect
  }
);

export default sequelize;
