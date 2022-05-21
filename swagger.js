const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'User Api',
    description: 'Includes account information such as Username and Password for users.',
  },
  host: 'localhost:3000',
  schemes: ['http']
  // host: 'cse341course.herokuapp.com',
  // schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
  });