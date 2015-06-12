App.Comment = DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  answer: DS.belongsTo('answer', {async: true})
});
