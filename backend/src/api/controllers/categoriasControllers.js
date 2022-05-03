const Categorias = require('../models/categoriasModels.js')

module.exports={
    async store (req, res){
        const {cat_descricao} = req.body
        const categoria = await Categorias.create({
            cat_descricao,
        });
        return res.status(200).send({
            status: 1,
            message: 'Categoria cadastrada com sucesso!',
            categoria
        })
    }
}