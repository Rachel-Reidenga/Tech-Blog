const { Post } = require('../models');

const postData = [
    {
        title: "Oscorp Industries Update",
        post_content: "Oscorp Industries has surpassed Quest Aerospace as the principal supplier to the United States Military. In short, ladies and gentlemen of the board: costs are down, revenues are up... and our stock has never been higher.",
        user_id: 3
    },
    {
        title: "Words to Live By",
        post_content: "Whatever life holds in store for me, I will never forget these words: 'With great power comes great responsibility.' This is my gift, my curse.",
        user_id: 1
    },
    {
        title: "Fusion-Based Energy Source Utilizing Tritium ",
        post_content: "Precious tritium is what makes this project go. There's only 25 pounds of it on the whole planet. I'd like to thank Harry Osborn and Oscorp Industries for providing it.",
        user_id: 2

    },
    {
        title: "May have stumbled into a multiverse...?",
        post_content: "One day, this weird thing happened. And I mean, like, REALLY weird. I was blown into last week. Literally. I landed in New York, but not my New York.",
        user_id: 5
    },
    {
        title: "I came to realize that I had more to offer this world than just making things that blow up.",
        post_content: "If we can’t accept limitations then we’re no better than the bad guys.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;