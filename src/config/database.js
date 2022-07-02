
module.exports = {
    dialect: 'mysql', 
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASEPASSWORD,
    database: process.env.DATABASE
} 