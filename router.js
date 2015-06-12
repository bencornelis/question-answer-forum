App.Router.map(function() {
  this.resource('questions', {path: '/'}, function() {
    this.resource('new-question', {path: 'questions/new'});
  });
})
