//database connection
const connect = require("../connectdb");
const User = require("../models/User");
const Hunter = require("../models/Hunter");

module.exports.getHunters = async (id, friends) => {

    let hunters = {}
    try {
        user = await User.find({ "_id": id}).limit(1);
        if (user.length > 0) {
            hunter = await Hunter.find({ "_id": user[0]["hunterSelected"] }).limit(1);
            if (hunter.length > 0) {
                let min = parseInt(hunter[0].level) - 10;
                let max = parseInt(hunter[0].level) + 10;
      
                hunters = await Hunter.find({ 
                    'user': {
                        $in: friends
                    },
                    "level" : { 
                        $gt: min, $lt: max 
                    },
                    "locked" : false 
                    }).limit(10);
            }
        }
        
    } catch (error) {
        console.log(error);
    }    
    return hunters;
};

module.exports.getRandomHunters = async (id) => {

    let hunters = {}
    try {
        user = await User.find({ "_id": id}).limit(1);
   
        if (user.length > 0) {
            hunter = await Hunter.find({ "_id": user[0]["hunterSelected"] }).limit(1);
      
            if (hunter.length > 0) {
                let min = parseInt(hunter[0].level) - 10;
                let max = parseInt(hunter[0].level) + 10;

                hunters = await Hunter.aggregate([
                    { $match: { "locked": false } },
                    { $match: { "level" : { $gt: min, $lt: max } } },
                    { $limit: 10 },
                ]);
            }
        
        }
        
    } catch (error) {
        console.log(error);
    }

    return hunters;
};