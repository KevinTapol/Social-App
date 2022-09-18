const Comment = require('../models/Comment')

module.exports = {
    createComment: async (req, res) => {
        try {
            // TODO - add new properties to each document
            // const commentUser = await User.findById(req.user.id);
            await Comment.create({
            comment: req.body.comment,
            likes: 0,
            // grabbing the id from parameters and store as the post
            post: req.params.id,
            createdBy: req.user.userName,
            createdById: req.user.id,
        });
            console.log("Comment has been added!");
            // redirect to specific post that the comment has been added to
            res.redirect("/post/"+req.params.id);
        } catch (err) {
            console.log(err);
        }
    },
    deleteComments: async (req, res) => {
        try {
            // mongoose method deleteOne matching specific comment id
            await Comment.deleteOne({_id: req.params.commentid})
            // redirecting to the post of the deleted comment
            res.redirect("/post/"+req.params.postid)
        } catch(err) {
            console.log(err)
        }
    }
};
