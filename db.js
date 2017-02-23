var Sequelize = require('Sequelize');

var sequelize;
if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging:  true //false
  })
} else {
  // the application is executed on the local machine ... use mysql
  sequelize = new Sequelize('postgres', 'postgres',  'kim0243', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });
}

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  score: Sequelize.INTEGER
});

var Leaderboard = sequelize.define('leaderboard', {
  ranking: Sequelize.INTEGER,
  username: Sequelize.STRING,
  score: Sequelize.INTEGER
});

var Gamestate = sequelize.define('gamestate', {
  playerOnePosition: Sequelize.STRING,
  playerTwoPosition: Sequelize.STRING,
  level: Sequelize.INTEGER
});

// User.sync({force: true}).then( function() {
//   User.create({
//     username: 'DJ',
//     password: 'hey',
//     score: 300
//   });
//   User.create({
//     username: 'Savy',
//     password: 'hey',
//     score: 1000
//   })
//   User.create({
//     username: 'Anukul',
//     password: 'hey',
//     score: 450
//   })
// });

User.sync({force: true});
// var consoleLater = function() {
//   User.findAll({
//     order: [
//       ['score', 'DESC']
//     ]
//   }).then( function(users) {
//     console.log('After sorting : ');
//     users.forEach( function(user) {
//       console.log(user.dataValues);
//     })
//   })
// };
// setTimeout(consoleLater, 1000);

module.exports = {
  User: User,
  Leaderboard: Leaderboard,
  Gamestate: Gamestate
}