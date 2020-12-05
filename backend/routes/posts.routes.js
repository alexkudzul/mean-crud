const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/PostsController');

router.get('/', PostsController.getPosts);
router.post('/', PostsController.createPost);
router.get('/:id', PostsController.getPost);
router.put('/:id', PostsController.updatePost);
router.delete('/:id', PostsController.deletePost);


module.exports = router;