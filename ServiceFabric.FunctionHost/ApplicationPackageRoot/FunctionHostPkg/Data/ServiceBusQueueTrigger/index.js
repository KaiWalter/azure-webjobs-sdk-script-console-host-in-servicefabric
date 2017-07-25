var util = require('util');

module.exports = function (context, inMessage) {
    context.log('Node.js ServiceBus queue trigger function processed message', inMessage);

    context.done();
}