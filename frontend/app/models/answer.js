import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  question: DS.belongsTo('question'),
  student: DS.belongsTo('user'),
  markedOptions: DS.hasMany('option')
});
