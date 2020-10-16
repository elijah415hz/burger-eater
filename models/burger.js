// Require the custom orm
const orm = require("../config/orm");


const burger = {
    // return all burgers
    all: function(cb) {
        orm.all("burgers", function(data) {
            cb(data)
        })
    },
    // add a burger
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(data) {
            cb(data)    
        })
    },
    // edit a burger
    update: function(colObjVals, condition, cb) {
        orm.update("burgers", colObjVals, condition, function(result) {
            cb(result);
        });
    },
    // delete a burger
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(result) {
            cb(result);
        })
    }
}

// export the burger obj
module.exports = burger;