const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Recipe Book Api Documentation',
    description: 'Includes api information for users and recipes ',
  },
  host: 'recipe-book-cse341.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js'); // Your project's root file
  });