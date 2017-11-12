module.exports = function(app) {

  app.get('/', function(req, res) {
    res.send("Hello!! Index File here ... ");
  });

  app.get('/about', function(req, res) {
    res.render("about.ejs");
  });

  app.get('*', function(req, res) {

    res.send('404', { title: 'Page Not Found'});

  });
}
