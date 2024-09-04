exports.dashboard = (req,res) => {
    res.render('Admin/dashboard')
};
exports.LoginPage = (req,res) => {
    res.render('Admin/signIn')
}

exports.loginPost = (req,res) =>{
    try {
        const data = {
            admin:"adminMain",
            password:12321
        }
        console.log(req.body)
        const {adminName,password} = req.body;
        if(data.admin!==adminName){
            console.log("name error")
            res.status(404).render("Admin/signIn")
        }else if(data.password!==parseInt(password)){
            console.log("pass wrong")
            res.status(404).render("Admin/signIn")
        }
        else{
            console.log("succesfully logedIn")
            res.redirect('/admin');
        }
    } catch (error) {
        
    }
}

exports.SignUpPage = (req,res) => {
    res.render('Admin/signUp')
}