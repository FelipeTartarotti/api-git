const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/noderest', { 
    useNewUrlParser: true, 
     useCreateIndex: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
useNewUrlParser: true