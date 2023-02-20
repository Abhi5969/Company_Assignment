const express = require('express');
const router = express.Router();
const userC = require('../controllers/userController');

router.get('/test-me',function(req,res){
    res.send({get:"done"})
})
// Routes
router.post('/adduser', userC.createuser)
router.get('/getuser',userC.getUser)
router.get('/getuserbyquery', userC.findUser)
router.patch('/updateuser',userC.updateUser)
router.delete('/deleteuser',userC.deleteUser)
  
module.exports = router;