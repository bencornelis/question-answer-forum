App.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  answersDisplayed: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },
    upvote: function() {
      this.get('model').incrementProperty('upvotes');
      this.get('model').save();
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('questions');
    },
    displayAnswers: function() {
      this.set('answersDisplayed', true);
    }
  }
});
