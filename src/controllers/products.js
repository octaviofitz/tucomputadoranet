const computadoras= require('../data/computadoras_db')
const categorias= require('../data/categorias_db')
const fs = require('fs');
const path = require('path');


module.exports= {
    computadoras: (req,res) => { 
        return res.render('computadoras',{
            title: 'TuComputadoraNet',         
           computadoras,
           categorias
        })
    },
    notebooks: (req,res) => { 
        return res.render('notebooks',{
            title: 'TuComputadoraNet',         
           computadoras,
           categorias
        })
    },
    agregarProducto: (req,res) => { 
        return res.render('agregarproducto',{
            title: 'TuComputadoraNet',         
           computadoras,
           categorias,
        })
    },
    guardarProducto: (req,res) => { 
        const {title, description,price,category} = req.body;
        
        let computadora= {
            id : computadoras[computadoras.length - 1].id + 1,
            title,
            description,
            price : +price,
            image : 'default-image.jpg',
            category
        }

        computadoras.push(computadora);
        
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'computadoras.json'),JSON.stringify(computadoras,null,2),'utf-8')
        return res.redirect('/')

    },

}

