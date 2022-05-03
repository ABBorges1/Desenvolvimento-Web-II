const sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new sequelize(dbConfig)

try{
    conexao.authenticate()
    console.log('Conexão ORM MYsql estabelecida')
} catch (error){
    console.log('Falha na conexão MYsql')
}

module.exports = conexao
