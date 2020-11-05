const helper = require("../helpers/token");

/* Routes */

exports.requestChat = (req, res, next) => {
    const newToken = helper.newToken();
    req.params.id = newToken;
    console.log(newToken);
    res.render('chat/main', {newToken});
};
