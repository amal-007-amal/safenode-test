var express = require('express');
var bodyParser = require('body-parser');
var cors =  require('./../cors');
const emailRouter =  express.Router();
var nodemailer =  require('nodemailer');


emailRouter.route('/')
.options(cors.cors,(request,response)=>{
    console.log("comming email here");
    response.sendStatus(200);
})
.post(cors.cors,(request,response)=>{
    console.log("request body",request.body)

    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'amalsankarps0@gmail.com',
            pass:'amalSankarps@lzy#12'
        }
    });

    var mailOptions = {
        from:request.body.email,
        to:'amalsankarps0@gmail.com',
        subject:`contact form`,
        html:`contact details ${request.body}`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send('error') 
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Sent Successfully')
        }
      });
})

module.exports = emailRouter