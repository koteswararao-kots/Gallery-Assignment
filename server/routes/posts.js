const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async(req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.status(500).json({message: err.message})
    }

})

router.post('/', async (req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        image:req.body.image
    })

    
    try{
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    }

    catch (err) {
        res.status(400).json({message: err})
    }
})

module.exports = router