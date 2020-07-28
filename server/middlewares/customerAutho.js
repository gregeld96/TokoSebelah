const { Cart } = require('../models');

function Authorization(req, res, next){
    let { id } = req.params

    Cart
        .findByPk(id)
        .then(data => {
            if(!data) throw ({status: 404, msg: "Data Not Found!"})
            else if (data.userId === req.userData.id) next()
            else throw ({status: 403, msg: "You are not Authorized!"})
        })
        .catch(err => {
            next(err)
        })
}

module.exports = Authorization;