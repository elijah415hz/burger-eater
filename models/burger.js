const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(data) {
            cb(data)
        })
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(data) {
            cb(data)    
        })
    },
    update: function(colObjVals, condition, cb) {
        orm.update("burgers", colObjVals, condition, function(result) {
            cb(result);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(result) {
            cb(result);
        })
    }
}

module.exports = burger;