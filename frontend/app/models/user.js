import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  assignedQuestions: DS.hasMany('question')
});
