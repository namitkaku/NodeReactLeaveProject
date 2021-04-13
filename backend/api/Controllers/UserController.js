'use strict';

var mongoose =  require('mongoose');

var User = mongoose.model('User');

module.exports = {
    addUser:addUser
};

function addUser(req,res)
{
    User.countDocuments({email : req.body.email}).then(count => {
        if(count > 0 )
        {
            return res.json({
                'status' : '203',
                'message' : 'Email already Exists',
            })
        }
        else
        {
            var userData = {
                email: req.body.email,
                password: req.body.password
            }

            User.insertMany(userData , function(error,success){
                if(!error)
                {
                    return res.json({
                        'code' :200,
                        'data': userData,
                        'message' : 'User Added Successfully'
                    })
                }
                else
                {
                    return res.json({
                        'code' :203,
                        'data': userData,
                        'message' : 'Fail to Add User'
                    })
                }
            })
        }
    })
  
}