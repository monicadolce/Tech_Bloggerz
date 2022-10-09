const { Post } = require('../models');

const postdata = [
    {
        post: 'I love coding!',
        user_id: '1',
    },
    {
        post: 'Bulma is so awesome!',
        user_id: '2',
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
