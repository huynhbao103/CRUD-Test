const express = require('express');
const { getHomepage,
    postCreatUser, getCreatePage,
    getUpdatePage, postUpdateUser,
    postHandleRemoveUser, postDeleteUser, } = require('../controllers/homeControllers');
const router = express.Router();

// Route for the home page
router.get('/', getHomepage);



// Route to render the create user page
router.get('/create', getCreatePage);
// Route to handle creating a new user
router.post('/create-user', postCreatUser);



// Route to render the update user page
router.get('/update/:id', getUpdatePage);
// Route to handle updating a user
router.post('/update-user', postUpdateUser);


router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser)


module.exports = router;
