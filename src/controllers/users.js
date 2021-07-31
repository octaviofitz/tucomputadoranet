module.exports= {
    login: (req,res) => { 
        return res.render('login',{
            title: 'TuComputadoraNet',
        })
    },
    registro: (req,res) => { 
        return res.render('register',{
            title: 'TuComputadoraNet',
        })
    },
}

