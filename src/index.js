const express = require('express');
const app = express();
const morgan = require ('morgan');

// Settings
// Si existe un puerto, lo utiliza, sino 3000
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
// Permitir datos de formularios, de inputs (textos)
app.use(express.urlencoded({extended: false}));
// Permite recibir y entender formatos json
app.use(express.json());

// ROUTES
app.use(require('./routes/index'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Servidor funcionando en http://localhost:${app.get('port')}`);
})
