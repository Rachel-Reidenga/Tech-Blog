const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Glad to see a friendly face!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "I am Iron Man!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "We should talk about that "
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Might know something about that."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Need to discuss something important about the project."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Let me know if you ever need assistance with funding."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I'm going to need you to elaborate."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Really intrested in seeing what you're working on."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;