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
    upvote: function() {
      var question = this.get('model');
      var newUpvoteCount = question.get('upvotes') + 1;
      question.set('upvotes', newUpvoteCount);
      question.save();
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('questions');
    },
    deleteAnswer: function(answer) {
      var question = this.get('model')
      question.get('answers').removeObject(answer);
      question.save();
      answer.destroyRecord();
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
    addComment: function(answer) {
      var comment = this.store.createRecord('comment', {
        text: this.get('commentText'),
        author: this.get('commentAuthor')
      });
      comment.save();

      this.set('commentText', '');
      this.set('commentAuthor', '');

      answer.get('comments').pushObject(comment);
      answer.save();
      answer.set('addingComment', false);
    }
  }
});
