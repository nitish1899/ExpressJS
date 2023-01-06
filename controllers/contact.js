const rootDir = require('../util/path');
const path = require('path');

exports.contactPerson = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'Contactus.html'));
};
