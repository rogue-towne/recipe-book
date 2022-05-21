const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'User Api',
    description: 'Includes account information such as Username and Password for users.',
  },
  host: 'recipe-book-cse341.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
  });