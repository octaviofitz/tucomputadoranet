const categorias= require('../data/categorias_db')
const stocks= require('../data/computadoras_db')


module.exports= {
    index: (req,res) => { 
        return res.render('index',{
            title: 'TuComputadoraNet',
           categorias,
           stocks,
           pcescritorio: stocks.filter(stocks => stocks.category === "Escritorio"),
           notebook: stocks.filter(stocks => stocks.category === "Notebook"),
           componente: stocks.filter(stocks => stocks.category === "Componente"),
        })
    },
}


