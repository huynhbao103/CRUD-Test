const connection = require ('../config/database');

const User= require('../models/user');
// const { getAllUsers } = require('../services/CRUDservice');

const getHomepage = async (req,res)=>{
    let results = await User.find({});
    return res.render('home.ejs',{listUsers:results})
};
const postCreatUser = async (req,res)=>{
    let email =req.body.email;  
    let name =req.body.name;
    let city =req.body.city;

    console.log(">>> email = ",email,'name = ',name, 'city = ',city)

    await User.create({
        email: email,
        name: name,
        city: city,
    })
    res.redirect('/');
   
}   

const getCreatePage = (req, res) =>{
    res.render('create.ejs')
}

const getUpdatePage = async (req,res)=>{
    const  userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs',{userEdit:user});
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.redirect('/');
}


const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;

    // await deleteUserById(id);
    let result = await User.deleteOne({
        _id: id
    })

    console.log(">>> result: ", result)
    res.redirect('/');
}



module.exports = {getHomepage,
    postCreatUser,getCreatePage,
    getUpdatePage,postUpdateUser,
    postDeleteUser,postHandleRemoveUser};