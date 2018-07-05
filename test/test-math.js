let math = require('../utilities/math');
exports.testAdd = function(test) {
    test.equals(math.add(1, 1), 2);
    test.done();
};
