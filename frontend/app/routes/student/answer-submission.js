import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      answer: this.store.createRecord('answer'),
      question: this.store.findRecord('question',params["questionId"],{reload: true}),
      student: this.store.findRecord('user', params['id'])
    })
  },

  resetController: function(controller, isExiting, transition) {
    this._super.apply(this, arguments);
    if (isExiting) {
        controller.resetData(); // or whatever function you want to call
    }
  }
});
