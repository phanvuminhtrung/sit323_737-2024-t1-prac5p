# Calculator Service

- This is a simple calculator service implemented in Node.js using Express and Winston for logging. It supports basic arithmetic operations: addition, subtraction, multiplication, and division.
- This is repo is for task 4.1P - SIT323 - 2024.

## Author
SIT323 – TASK4.1P
VU MINH TRUNG PHAN – 221438973

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository
2. Install the dependencies using npm

### Usage
The calculator service exposes four endpoints, each corresponding to a basic arithmetic operation:

Addition: /add?n1=<number>&n2=<number>
Subtraction: /subtract?n1=<number>&n2=<number>
Multiplication: /multiply?n1=<number>&n2=<number>
Division: /divide?n1=<number>&n2=<number>
Replace <number> with the numbers you want to operate on.

### Logging
The service uses Winston for logging. All logs are formatted in JSON and stored in combined.log. Errors are also logged separately in error.log.

### Running the Service
To start the service, run:
- node calculatorwithlogger.js
- The service will start listening on port 3040.

