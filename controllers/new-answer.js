App.NewAnswerController = Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var text = this.get('text');
      var author = this.get('author');

      if (!author) {
        author = 'anonymous';
      }

      var newAnswer = this.store.createRecord('answer', {
        text: text,
        author: author,
        upvotes: 0
      });
      newAnswer.save();

      var question = this.get('controllers.question.model');
      question.get('answers').pushObject(newAnswer);
      question.save();

      this.get('controllers.question').set('buttonsDisabled', false);

      this.transitionToRoute('question', question.id);
    }
  }
});
