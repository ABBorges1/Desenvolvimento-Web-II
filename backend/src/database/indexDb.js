const sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new sequelize(dbConfig)

const categorias = require('../api/models/categoriasModels.js')

try{
    conexao.authenticate()
    console.log('Conexão ORM MYsql estabelecida')
} catch (error){
    console.log('Falha na conexão MYsql')
}

categorias.init(conexao)

module.exports = conexao
