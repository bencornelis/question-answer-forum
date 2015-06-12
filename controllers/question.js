App.QuestionController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('questions');
    },
    deleteAnswer: function(answer) {
      question = this.get('model')
      question.get('answers').removeObject(answer);
      question.save();
      answer.destroyRecord();
    }
  }
});
