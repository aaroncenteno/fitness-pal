const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

// Javascript Helper Functions
const helpers = require('./utils/helpers');

// Require Handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

// Use Path to target static files
const path = require('path');

// Use enviroment or port 3001
const app = express();
const PORT = process.env.PORT || 3001;

// Create a session 
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

// Set Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Connect static files
app.use(express.static(path.join(__dirname, 'public')));

// Load Database
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});