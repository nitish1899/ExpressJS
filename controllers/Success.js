const rootDir = require('../util/path');
const path = require('path');

exports.Success = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};