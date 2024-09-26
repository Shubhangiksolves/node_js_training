module.exports = {
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432, 
    database: 'newusers',
    dialect: 'postgres',

    pool : {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}