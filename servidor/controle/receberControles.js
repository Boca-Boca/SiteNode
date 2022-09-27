require('../modelo/bancozinhohumild');
const Categoria = require('../modelo/Categoria');

// GET HOME

exports.home = async(req, res)=>{
try {

    const numeroLimite = 5;
    const categories = await Categoria.find({}).limit(numeroLimite);
    res.render('index', categories);
} catch (error) {
    res.satus(500).send({message: error.message || "Ocorreu um erro grave"});
}

}






 