import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo(),
  text: DS.attr(),
  isRightAnswer: DS.attr("boolean")
});
