__path = process.cwd()
require("./settings");
const conf = require('./configs.js')
var express = require('express'),
    cors = require('cors'),
    flash = require('connect-flash'),
    rateLimit = require("express-rate-limit"),
    passport = require('passport'),
    expressLayout = require('express-ejs-layouts'),
    compression = require('compression'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    MemoryStore = require('memorystore')(session),
    secure = require('ssl-express-www'),
    cors = require ("cors"),
    schedule = require('node-schedule');
    
const PORT = process.env.PORT || 8080 || 5000 || 3000
var app = express()
var { color } = require('./lib/color.js')

const { isAuthenticated } = require('./lib/auth');
//const { connectMongoDb } = require('./MongoDB/mongodb');
//const { resetAllLimit, getApikey } = require('./MongoDB/function')
const { resetAllLimit, getApikey } = require('./database/database.js');
const { getVisitors, addVisitors } = require('./database/visitors.js');
var apirouter = require('./routes/api'),
    mainrouter = require('./routes/main'),
    userrouter = require('./routes/users');
//connectMongoDb();
app.set('trust proxy', 1);
app.use(compression());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 2000, 
  message: 'Oops too many requests'
});
app.use(limiter);

app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static("assets"))

app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)

app.use(session({
  secret: 'secret',  
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },
  store: new MemoryStore({
    checkPeriod: 86400000
  }),
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());
require('./lib/config')(passport)

app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

app.get('/', (req, res) => {
    res.render('home', {
    layout: 'home'
  });
})
app.get('/docs', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username, limit} = getkey
  addVisitors()
  res.render('index', {
    getVisitors,
    apikey,
    username,
    limit,
    layout: 'index'
  });
})

app.get('/cecan', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('cecan', {
    config: conf,
    apikey,
    layout: 'cecan'
  });
})

app.get('/downloader', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('downloader', {
    config: conf,
    apikey,
    layout: 'downloader'
  });
})

app.get('/news', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('news', {
    config: conf,
    apikey,
    layout: 'news'
  });
})

app.get('/photooxy', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('photooxy', {
      config: conf,
      apikey,
      layout: 'photooxy'
  });
})

app.get('/search', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('search', {
      config: conf,
      apikey,
      layout: 'search'
  });
})

app.get('/nsfw', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('nsfw', {
      config: conf,
      apikey,
      layout: 'nsfw'
  });
})

app.get('/islam', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('islam', {
      config: conf,
      apikey,
      layout: 'islam'
  });
})

app.get('/game', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('game', {
      config: conf,
      apikey,
      layout: 'game'
  });
})

app.get('/other', isAuthenticated, async(req, res) => {
  let getkey = await getApikey(req.user.id)
  let { apikey, username } = getkey
  res.render('other', {
      config: conf,
      apikey,
      layout: 'other'
  });
})

app.use('/api', apirouter)
app.use('/users', userrouter)

app.use(function (req, res, next) {
    res.status(404).json({
        status: false,
        message: "Page not found"
    })
})

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
    schedule.scheduleJob('0 12 * * *', () => {
        resetAllLimit()
    })
})

module.exports = app
