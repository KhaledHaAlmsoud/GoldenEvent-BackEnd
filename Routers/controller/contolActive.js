const { populate } = require("../../DB/Models/activModel");
const activModel = require("../../DB/Models/activModel");
const userModel=require("../../DB/Models/userModel")


const getActive= (req, res) => {
  activModel.find({})
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }




const postActive =async(req,res)=>{
    const { title,des,date,img,tic} = req.body; 
    const userId = req.token.userId;

      const newEvent = new activModel( { title,des,date,img,tic});
    
      try {
        const response = await newEvent.save();
        const event= await activModel.find({}).populate("userId")
        res.status(201).json(event);
      } catch (error) {
        res.status(403).json(error);
      }
      
    }



    const postOneActive =async(req,res)=>{
      const {walaa}=req.body
      const userId = req.token.userId;
      // console.log(userId);
      // console.log(walaa,"aaaaa");
    try {
      const findUser= await userModel.findOneAndUpdate({_id:userId},{ $push:{cart:walaa}},{new:true}).populate("cart")
  
      res.status(201).json(findUser);
    } catch (error) {
      
      res.send(error);
      
    }
    }

    const getcart=async(req,res)=>{
      const userId = req.token.userId;
      console.log(userId);
try {
  const findCart= await userModel.find({_id:userId}).select("cart").populate("cart")
  res.status(200).json(findCart)
  
} catch (error) {
  res.send(error);
  
}
    }
const deleteActive=async (req, res) => {
      const id = req.params.id;
      const userId = req.token.userId;

        try {
          // const deleteOne = await userModel.findOneAndDelete({ _id: id });
          // const events = await userModel.find({});


          const delOne= await userModel.findOneAndUpdate({ _id: userId },{
            $pull:{cart:id}
          },{new:true}).populate("cart")
          
          res.status(201).json(delOne);
        } catch (error) {
          res.send(error);
        }
      };
     

      
    // const updateActive = async (req, res) => {
    //   const id = req.params.id;
    //   try {
    //     const updateOne = await activModel.findOneAndUpdate(
    //       { _id: id },
    //       req.body,
    //       { new: true }
    //     );
    //     const event = await activModel.find({}).populate('userId');
    //     res.status(201).json(event);
    //   } catch (error) {
    //   }
    // };
    



  
  module.exports={
    getActive,
    postActive,
    deleteActive,
    postOneActive,
    getcart
  }