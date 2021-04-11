const { User } = require('../models');

const userData = [
    {
        username: "Peter_Parker",
        twitter: "SpiderMan",
        github: "SpiderMan",
        email: "Peter_Parker@gmail.com",
        password: "Thwip!"
    },
    {
        username: "Otto_Octavius",
        twitter: "Doc_Octopus",
        github: "Doc_Octopus",
        email: "Dr.Octavius@gmail.com",
        password: "OctoArms"
    },
    {
        username: "Norman_Osborn",
        twitter: "Green_Goblin",
        github: "Green_Goblin",
        email: "Norman_Osborn@gmail.com",
        password: "Jack-o-Boom!"
    },
    {
        username: "Tony_Stark",
        twitter: "Iron_Man",
        github: "Iron_Man",
        email: "Tony_Stark@gmail.com",
        password: "I_Am_Iron_Man"
    },
    {
        username: "Gwen_Stacy",
        twitter: "Spider_Gwen",
        github: "Spider_Gwen",
        email: "Gwen_Stacy@gmail.com",
        password: "Spider_Girl"
    },
    {
        username: "Felicia_Hardy",
        twitter: "Black_Cat",
        github: "Black_Cat",
        email: "Felicia_Hardy@gmail.com",
        password: "Cat_Burglar"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;