## ABOUT THE PROJECT
- This is a simple calculator service implemented in Node.js using Express and Winston for logging. It supports basic arithmetic operations: addition, subtraction, multiplication, and division.
- This is repo is for task 4.1P - SIT323 - 2024.

## AUTHOR
SIT323 – TASK4.1P, TASK4.1C
VU MINH TRUNG PHAN – 221438973

## GETTING STARTED
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- npm

### Installing
1. Clone the repository
2. Install the dependencies using npm

### Usage
The calculator service exposes four endpoints, each corresponding to a basic arithmetic operation:

- Addition: /add?n1=number&n2=number
- Subtraction: /subtract?n1=number&n2=number
- Multiplication: /multiply?n1=number&n2=number
- Division: /divide?n1=number&n2=number
- Exponentiation: /pow?n1=number&n2=number
- Square Root: /sqrt?n1=number
- Modulo: /mod?n1=number&n2=number

Replace "number" with the numbers you want to operate on.

### Logging
The service uses Winston for logging. All logs are formatted in JSON and stored in combined.log. Errors are also logged separately in error.log.

### Running the Service
To start the service, run:
- node calculatorwithlogger.js
- enter example url to your browser (http://localhost:3040/subtract?n1=1&n2=2)

