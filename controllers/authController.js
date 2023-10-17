import useModel from "../models/useModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
    try{
        const {name, email, password, phone, address} = req.body;

        // validations 
        if(!name){
            return res.send({error :"name is required"})
        };
        if(!email){
            return res.send({error :"email is required"})
        };
        if(!password){
            return res.send({error :"password is required"})
        };
        if(!phone){
            return res.send({error :"phone is required"})
        };
        if(!address){
            return res.send({error :"address is required"})
        };

        // check if user is already registerd by this email 
        const existingUser = await useModel.findOne({email})  // we are using email instead of email:email because both work same

        // existing user 
        if(existingUser){
            res.status(200).send({
                success: true,
                message: "already register please login"
            });
        };

        // register user 
        const hashedPassword = await hashPassword(password);
        // save 
        const user = await new useModel({name, email, phone, address, password: hashedPassword}).save();
        res.status(201).send({
            success: true,
            message: "user registered successfully",
            user
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in registration",
            error
        });
    };
};
