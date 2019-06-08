var orm = require('../config/orm.js');

var burger = {
    selectBurger: function(callback){
        orm.selectAll('burgers', function(results){
            callback(results)
        })
    },
    addBurger: function(name,callback){
        orm.insertOne('burgers',name,callback, function(results){
            callback(results)
        })
    },
    updateBurger: function(id,callback){
        orm.updateOne('burgers',id,callback,function(results){
            callback(results)
        })
    }

}

module.exports = burger;
