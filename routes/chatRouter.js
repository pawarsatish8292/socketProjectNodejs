import express from 'express';
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Chat room API is running!")
});

export default router;