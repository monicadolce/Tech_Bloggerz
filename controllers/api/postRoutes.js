const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Post route allows to create a post with text
router.post('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.create({
        post: req.body.post,
        user_id: req.session.user_id,
      });
      console.log(postData)
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  // Put route allows to update the post based on the user id
  router.put('/:id', withAuth, async (req, res) => {
    Post.update(
      {
        post: req.body.post,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedPost) => {
        res.status(200).json(updatedPost);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  
  // Delete route allows to delete the post based on the user id
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!postData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;