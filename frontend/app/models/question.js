import DS from 'ember-data';
import Ember from "ember";

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  instructions: DS.attr(),
  questionType: DS.belongsTo(),
  options: DS.hasMany(),
  idealAnswer: DS.attr(),


  noOfOptions: Ember.computed('type',function(){
    if (this.get('type')=='MCQ') {
        return 4;
    }else{
      return 0;
    }
  })
});
