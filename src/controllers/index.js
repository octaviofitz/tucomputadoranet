const categorias= require('../data/categorias_db')
const componentes= require('../data/componentes_db')
const computadoras= require('../data/computadoras_db')


module.exports= {
    index: (req,res) => { 
        return res.render('index',{
            title: 'TuComputadoraNet',
           categorias,
           componentes,
           computadoras,
        })
    },
}


