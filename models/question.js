App.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  upvotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
