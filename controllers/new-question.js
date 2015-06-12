App.NewQuestionController = Ember.Controller.extend({
  needs: ['questions'],
  actions: {
    addQuestion: function() {
      var question = this.get('question');
      var author = this.get('author');
      var description = this.get('description');

      if (!author) {
        author = 'anonymous';
      }

      var newQuestion = this.store.createRecord('question', {
        question: question,
        author: author,
        description: description,
        upvotes: 0
      });
      newQuestion.save();

      this.set('question', '');
      this.set('author', '');
      this.set('description', '');

      this.get('controllers.questions').set('addingQuestion', false);

      this.transitionToRoute('questions');
    }
  }
});
