// Import the required modules
const express = require("express");
const winston = require('winston');

// Create an Express application
const app = express();

// Create a logger using Winston
const logger = winston.createLogger({
    // Set the log level to 'info'
    level: 'info',
    // Format the logs in JSON
    format: winston.format.json(),
    // Set the default metadata for the logs
    defaultMeta: { service: 'calculate-service' },
    // Define the transport for the logs
    transports: [
      // Log all errors to error.log
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      // Log all levels of logs to combined.log
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});

// If the environment is not production, also log to the console
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

// Define the arithmetic operations
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

// Define the endpoint for addition
app.get("/add", (req, res) => {
    // Handle the request by performing the addition operation
    handleRequest(req, res, add, 'addition');
});

// Define the endpoint for subtraction
app.get("/subtract", (req, res) => {
    // Handle the request by performing the subtraction operation
    handleRequest(req, res, subtract, 'subtraction');
});

// Define the endpoint for multiplication
app.get("/multiply", (req, res) => {
    // Handle the request by performing the multiplication operation
    handleRequest(req, res, multiply, 'multiplication');
});

// Define the endpoint for division
app.get("/divide", (req, res) => {
    // Handle the request by performing the division operation
    handleRequest(req, res, divide, 'division');
});

// Define the endpoint for exponentiation
app.get("/pow", (req, res) => {
    // Handle the request by performing the exponentiation operation
    handleRequest(req, res, Math.pow, 'exponentiation');
});

// Define the endpoint for square root
app.get("/sqrt", (req, res) => {
    // Handle the request by performing the square root operation
    handleRequest(req, res, Math.sqrt, 'square root');
});

// Define the endpoint for modulo
app.get("/mod", (req, res) => {
    // Handle the request by performing the modulo operation
    handleRequest(req, res, (n1, n2) => n1 % n2, 'modulo');
});

// Define handle request function
function handleRequest(req, res, operation, operationName) {
    try {
        // Parse the input parameters
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        // Validate input parameters. We ignore the case of square root operation as it only requires one parameter
        if (isNaN(n1) || (operationName !== 'square root' && isNaN(n2))) {
            logger.error(`Invalid parameters for ${operationName}: n1=${n1}, n2=${n2}`);
            res.status(400).json({ statuscode: 400, msg: 'Invalid parameters' });
            return;
        }

        // Log the received parameters
        logger.info(`Parameters ${n1} and ${n2} received for ${operationName}`);
        // Perform the operation
        const result = operation(n1, n2);
        // Send the result back to the client
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        // If an error occurs, log the error and send an error response to the client
        logger.error(`Error during ${operationName}: ${error}`);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
}

// Start the Express application
const port = 3040;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});