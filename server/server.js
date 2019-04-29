const config = require('./config');
const app = require('./app');

app.listen(config.PORT, function() {
  console.log("Server is running on Port: " + config.PORT);
});