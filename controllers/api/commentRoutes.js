const router = require('express').Router();
const { Comment } = require('../../models');

// Create a comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            name: req.session.name,
            description: req.body.description,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});



module.exports = router;