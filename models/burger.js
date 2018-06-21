/**
 * 
create an object that contains methods: create, select one, select all, update to devoured, delete

 */
var db = require('../config/connection')
var burger = {
    selectAll: function(cb){
        db.query("select * from burgers" , function(error, results, fields){
            if (error) throw error;   
            cb(results)
        })
    },
}
module.exports = burger