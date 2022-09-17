const Comment = require('../models/Comment')

module.exports = {
    createComment: async (req, res) => {
        try {
            await Comment.create({
            comment: req.body.comment,
            likes: 0,
            // grabbing the id from parameters and store as the post
            post: req.params.id,
        });
            console.log("Comment has been added!");
            // redirect to specific post that the comment has been added to
            res.redirect("/post/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
};
