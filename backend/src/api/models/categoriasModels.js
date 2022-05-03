const {Model, DataTypes} = require('sequelize')

class Categorias extends Model{
    static init(sequelize){
        super.init({
            cat_descricao: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'categorias',
        });
        return this;
    }
}
module.exports = Categorias