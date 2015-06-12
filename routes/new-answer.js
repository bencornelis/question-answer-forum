App.NewAnswerRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render({outlet: 'new-answer'});
  }
});
