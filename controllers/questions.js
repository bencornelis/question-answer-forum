App.QuestionsController = Ember.ArrayController.extend({
  addingQuestion: false,
  sortProperties: ['upvotes'],
  sortAscending: false,

  actions: {
    newQuestion: function() {
      this.set('addingQuestion', true);
    }
  }
});
