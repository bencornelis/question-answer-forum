App.Answer = DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  comments: DS.hasMany('comment', {async: true}),
  commentsShowing: DS.attr(),
  upvotes: DS.attr()
})
