App.AnswersRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({outlet: 'answers'});
  },
  model: function(params) {
    return this.modelFor('question').get('answers');
  }
});
