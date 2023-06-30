const express=require('express');
const router=express.Router();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  // host: "localhost",
    service:"gmail",
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "kaverdas6873@gmail.com",
       pass: "kavery@6873",
   
    },
  });

router.get('/',(req,res)=>{
    res.send('Hi, This is Get')
})
router.post('/send',async(req,res)=>{
    res.send('This is post')
    const info = await transporter.sendMail({
        from: "kaverdas6873@gmail.com", // sender address
        to: "bishordevassykutty@gmail.com", // list of receivers
        subject: "Project", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);

})
module.exports=router;