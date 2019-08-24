
const Logger = require('../0.module/logger');
const logger = new Logger();

logger.on('LoggerEvent', (eventArgs) => {
    console.log('LoggerEvent called.', eventArgs);
});

logger.log('Logging...');
logger.log('Logging...');
logger.log('Logging...');
logger.log('Logging...');