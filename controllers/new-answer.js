App.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var newAnswer = this.store.createRecord('answer', {
        text: this.get('text'),
        author: this.get('author'),
        upvotes: 0
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.transitionToRoute('question', question.id);
    }
  }
});
