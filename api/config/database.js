const Sequelize = require('sequelize');
require('dotenv').config();

// module.exports = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,  // Add this line to specify the port
//         dialect: 'postgres',
//         operatorsAliases: false,
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         }
//     }
// );

module.exports = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
