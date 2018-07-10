/**
 * 
create an object that contains methods: create, select one, select all, update to devoured, delete

 */
var db = require('../config/connection')
var burger = {
    selectAll: function (cb) {
        db.query("select * from burgers", function (error, results, fields) {
            if (error) throw error;
            cb(results)
        })
    },
    insertOne: function (burgerType, cb) {
        var sql = `INSERT INTO burgers (type, devoured) VALUES ('${burgerType}', false)`
        db.query(sql, function (error, results, fields) {
            if (error) throw (error);
            cb(results)
        })
    },
    updateOne: function (id, cb) {
        var sql = `UPDATE burgers SET devoured = true WHERE id = ${id}`
        db.query(sql, function (error, results, fields) {
            if (error) throw (error);
            cb(results)
        })
    },
    deleteAll: function () {
        var sql = `DELETE FROM burgers_db.burgers WHERE devoured = true`
        db.query(sql, (err, results, fields) => {
            if (err) throw (err);
            return
        })
    }
}
module.exports = burger