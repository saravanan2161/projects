const { connect } = require('mongoose');

const dbConnect = (url) => {
    return connect(url);
};

module.exports = {
    dbConnect
};