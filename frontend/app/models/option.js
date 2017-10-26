import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo(),
  text: DS.attr(),
  isCorrect: DS.attr("boolean")
});
