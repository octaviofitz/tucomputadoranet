const stocks= require('../data/computadoras_db')
const categorias= require('../data/categorias_db')
const fs = require('fs');
const path = require('path');


module.exports= {
    computadoras: (req,res) => { 
        return res.render('computadoras',{
            title: 'TuComputadoraNet',         
           stocks,
           categorias,
           pcescritorio: stocks.filter(stocks => stocks.category === "Escritorio"),
        })
    },
    notebooks: (req,res) => { 
        return res.render('notebooks',{
            title: 'TuComputadoraNet',         
           stocks,
           categorias,
           notebook: stocks.filter(stocks => stocks.category === "Notebook"),
        })
    },
    agregarProducto: (req,res) => { 
        return res.render('agregarproducto',{
            title: 'TuComputadoraNet',         
           stocks,
           categorias,
        })
    },
    guardarProducto: (req,res) => { 
        const {title, description,price,category} = req.body;
        
        let productoNuevo= {
            id : stocks[stocks.length - 1].id + 1,
            title,
            description,
            price : +price,
            image : req.file ? req.file.filename : 'default-image.jpg', /* si viene un archivo por file, guardalo, y si no ponele la imagen default */
            category
        }

        stocks.push(productoNuevo);
        
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'computadoras.json'),JSON.stringify(stocks,null,2),'utf-8')
        return res.redirect('/')

    },
    detalle: (req,res) => { 
        let detalleProducto = stocks.find(stocks => stocks.id === +req.params.id);

        return res.render('detalleProducto',{
            title: 'TuComputadoraNet',         
           stocks,
           detalleProducto,
        })
    },
    eliminar : (req,res) => {
        res.send(req.params.id)
    }

}

