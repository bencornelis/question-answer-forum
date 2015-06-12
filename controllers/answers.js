App.AnswersController = Ember.ArrayController.extend({
  needs: ['question'],
  sortProperties: ['upvotes'],
  sortAscending: false,
  actions: {
    deleteAnswer: function(answer) {
      var answers = this.get('model');
      answers.removeObject(answer);
      var question = this.get('controllers.question.model');
      question.get('answers').removeObject(answer);
      question.save();
    },
    upvoteAnswer: function(answer) {
      answer.incrementProperty('upvotes');
      answer.save();
    },
    viewComments: function(answer) {
      answer.set('commentsShowing', true);
    },
    hideComments: function(answer) {
      answer.set('commentsShowing', false);
    },
    newComment: function(answer) {
      answer.set('addingComment', true);
    },
    addComment: function(answer, commentText, commentAuthor) {
      var comment = this.store.createRecord('comment', {
        text: commentText,
        author: commentAuthor,
        upvotes: 0
      });
      comment.save();
      answer.get('comments').pushObject(comment);
      answer.set('addingComment', false);
      answer.save();

      this.set('commentText', '');
    }
  }
});
