const {createLogger, format, transports} = require('winston')
const {combine, timestamp, printf, colorize} = format

//logger fomrat
const logFormat = printf(({level, message, timestamp}) => {
    return `${timestamp} ${level}: ${message}`
})

const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console({ format: combine(colorize(), logFormat) }), // Log to console
        new transports.File({ filename: './logs/error.log', level: 'error' }),    // Log errors to a file
        new transports.File({ filename: './logs/combined.log' }),                  // Log all messages to a 
        new transports.File({ filename, './logs/info.log' })
    ]
})

module.exports = { logger }