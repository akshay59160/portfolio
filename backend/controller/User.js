import { sendMail } from "../middlewares/sendmail.js";
import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import cloudinary from "cloudinary"
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema({
    name: String,
    email: String,
    message:String
    // other product-specific fields...
  });
  
  // Create the models

  const contacts = mongoose.model('contacts', ProductSchema);

// const bodyParser = require('body-parser');

// app.use(bodyParser.json({ limit: '10mb' }));
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

export const login = async (req,res) =>{
    try{
        const { email,password } = req.body;
        const user = await User.findOne({ email,password});

        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid email or password",
            });
        }
       
             const token = jwt.sign({_id: user._id }, process.env.JWT_SECRET);
           

        res.status(200).cookie("token",token,{
            expires:new Date(Date.now() + 600000),
            httpOnly:true,
        }).json({
            success:true,
            message:"Logged In successfully",
        }); 
    }
    catch (error){
        return res.status(400).json({
            success:false,
            // message:error.message,
            message:"login unsuccessfull"
        })
    }
};


export const logout = async (req,res) =>{
    try{

        res.status(200).cookie("token",null,{
            expires:new Date(Date.now()),
            httpOnly:true,
        }).json({
            success:true,
            message:"Logged Out successfully",
        })
    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
};

export  const getUser = async (req,res)=>{
    try{
        const user = await User.findOne().select("-password -email");
        res.status(200).json({
            success:true,
            user,
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};

export  const myProfile =async(req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        res.status(200).json({
            success:true,
            user,
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};
export  const contact =async(req,res)=>{
    try{
      const { name,email,message } =req.body;
    //   const user = await User.findById(req.body._id)
    //   console.log("abhay");
    //   console.log(contact.message);
    //   console.log(re)
      let contactsave = new contacts( {
  name:name,
  email:email,
  message:message,

    } );
    //  

    //   const userMessage = `Hey, I am ${name}. My email is ${email}. My message is ${message}`;     const { title, description, date}= req.body;
        // const user = await User.findById(req.user._id);
        // user.contact.unshift({
        //  name,
        //  email,
        //  message
        // });
     await contactsave.save();
        // await user.save();

    //   await sendMail(userMessage);
      return res.status(200).json({
        success:true,
        message:"message sent successfully"
      })
    }
    catch (error){
        
        return res.status(400).json({
            success:false,
            
            message:error.message,
        })
    }  
};

export  const updateUser =async(req,res)=>{
    try{
        const user = await User.findById(req.user._id);
        const { name, email, password, skills, about } = req.body;
        console.log(name);
       if(name){
        user.name=name;
       }

       if(email){
        user.email= email;
       }

       if(password){
        user.password=password;
       }

       if(skills){

        if(skills.image1){
         
            await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(skills.image1,{
                folder:"portfolio1",
            });

            user.skills.image1 ={
                public_id: myCloud.public_id,
                url:myCloud.secure_url,
            };
        };

        if(skills.image2){
         
            await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(skills.image2,{
                folder:"portfolio1",
            });

            user.skills.image2 ={
                public_id: myCloud.public_id,
                url:myCloud.secure_url,
            };
        };

        if(skills.image3){
         
            await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(skills.image3,{
                folder:"portfolio1",
            });

            user.skills.image3 ={
                public_id: myCloud.public_id,
                url:myCloud.secure_url,
            };
        };

        if(skills.image4){
         
            await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(skills.image4,{
                folder:"portfolio1",
            });

            user.skills.image4 ={
                public_id: myCloud.public_id,
                url:myCloud.secure_url,
            };
        };

        if(skills.image5){
         
            await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(skills.image5,{
                folder:"portfolio1",
            });

            user.skills.image5 ={
                public_id: myCloud.public_id,
                url:myCloud.secure_url,
            };
        };

        if(skills.image6){
         
            await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(skills.image6,{
                folder:"portfolio1",
            });

            user.skills.image6 ={
                public_id: myCloud.public_id,
                url:myCloud.secure_url,
            };
        };
       };

       if( about){
       
        if(about.name){
             user.about.name=about.name;
        }
        if(about.title){
          user.about.title=about.title;
        }
        if(about.subtitle){
         user.about.subtitle=about.subtitle;
        }
        if(about.description){
          user.about.description=about.description;
        }
        if(about.quote){
            user.about.quote=about.quote;
        }
        
        if(about.avatar){
            await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);

            const myCloud = await cloudinary.v2.uploader.upload(about.avatar,{
                folder:"portfolio1",
            });
            user.about.avatar ={
                public_id:myCloud.public_id,
                url:myCloud.secure_url,
            }
        }
       }

       await user.save();


        res.status(200).json({
            success:true,
            message:'user update successfully'
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            // message:error.message,
            message:"user update unsuccessfully"
        })
    }  
};

export  const addTimeline =async(req,res)=>{
    try{

        const { title, description, date}= req.body;
        const user = await User.findById(req.user._id);
   user.timeline.unshift({
    title,
    description,
    date,
   });

   await user.save();

        res.status(200).json({
            success:true,
            message:"Timeline updated"
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};


export  const addYoutube =async(req,res)=>{
    try{

        const { url,title, image }= req.body;
        const user = await User.findById(req.user._id);
     
        const myCloud = await cloudinary.v2.uploader.upload(image,{
            folder:"portfolio1",
        })

   user.youtube.unshift({
     url,
    title,
    image:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url,
    }
   });

   await user.save();

        res.status(200).json({
            success:true,
            message:"Youtube updated"
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};

export  const addProject =async(req,res)=>{
    try{

        const { url, title, image, description, techStack }= req.body;
        const user = await User.findById(req.user._id);
     
        const myCloud = await cloudinary.v2.uploader.upload(image,{
            folder:"portfolio1",
        })

   user.project.unshift({
    url,
    title,
    image,
    description,
     techStack,
    image:{
        public_id:myCloud.public_id,
        url:myCloud.secure_url,
    }
   });

   await user.save();

        res.status(200).json({
            success:true,
            message:"Project updated"
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};


export  const deleteTimeline =async(req,res)=>{
    try{

       const { id } = req.params;
        const user = await User.findById(req.user._id);
  
        user.timeline = user.timeline.filter((item)=>item._id!=id);

   await user.save();

        res.status(200).json({
            success:true,
            message:" Delete from Timeline "
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};

export  const deleteYoutube =async(req,res)=>{
    try{

       const { id } = req.params;
        const user = await User.findById(req.user._id);

        const video = user.youtube.find((video)=>video._id==id);

        await cloudinary.v2.uploader.destroy(video.image.public_id)
  
        user.youtube = user.youtube.filter((video)=>video._id !=id);

   await user.save();

        res.status(200).json({
            success:true,
            message:" Delete from Youtube "
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};


export  const deleteProject =async(req,res)=>{
    try{

       const { id } = req.params;
        const user = await User.findById(req.user._id);

        const project = user.projects.find((video)=>video._id==id);

        await cloudinary.v2.uploader.destroy(project.image.public_id)
  
        user.projects = user.projects.filter((video)=>video._id !=id);

   await user.save();

        res.status(200).json({
            success:true,
            message:" Delete from project "
        });

    }
    catch (error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }  
};

