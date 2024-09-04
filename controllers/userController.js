
exports.Home = (req,res) => {
    res.render('Client/index')
};

exports.LoginPage = (req,res) => {
    res.render('Client/signIn')
}

exports.SignUpPage = (req,res) => {
    res.render('Client/signUp')
}