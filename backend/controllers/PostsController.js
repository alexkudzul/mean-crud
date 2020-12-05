const Post = require('../models/Post');

const PostsController = {};

PostsController.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

PostsController.createPost = async (req, res) => {

    const post = new Post({
        title: req.body.title,
        excerpt: req.body.excerpt,
        content: req.body.content,
        category: req.body.category
    });

    await post.save();
    res.json({ status: 'Post created' });
}

PostsController.getPost = async (req, res) => {

    const post = await Post.findById(req.params.id);

    res.json(post);

}

PostsController.updatePost = async (req, res) => {

    const { id } = req.params;
    const { title, excerpt, content, category } = req.body;
    await Post.findByIdAndUpdate(id, { title, excerpt, content, category }, { new: true }); // new: true => sino existe un dato del post que lo cree

    res.json({ status: 'Post updated' });

}

PostsController.deletePost = async (req, res) => {

    const { id } = req.params;
    await Post.findByIdAndDelete(id);

    res.json({ status: 'Post deleted' });
}

module.exports = PostsController;