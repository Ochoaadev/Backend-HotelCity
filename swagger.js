const SwaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const option = {
    definition:{
        openapi: "3.1.0",
        info:{
            title: "Api Hotel City",
            verion: "1.0.0"
        },
        server:[
            {
                server:'http://localhost:4000',
            },
        ],
        apis:["src/docs/documentation.js"],
    },
};

const SwaggerSpec = SwaggerJSDoc(option)

const swaggerDocs = (app, port) => {
    app.use(
      "/Documentation",
      SwaggerUi.serve,
      SwaggerUi.setup(SwaggerSpec)
    );
  
    console.log("[Swagger] " + "http://localhost:4000/Documentation");
  };
  
  module.exports = {swaggerDocs};