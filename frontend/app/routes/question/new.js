import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller,model){
    this._super(controller,model)
    controller.set('question', this.store.createRecord('question'))
    controller.set('questionTypes',this.store.findAll('question-type'))
    let noOfOptions = 4
    for (let i = 0; i < noOfOptions; i++) {
        controller.get('question.options').pushObject(this.store.createRecord('option'))
    }
  },

  resetController: function(controller, isExiting, transition) {
    this._super.apply(this, arguments);
    if (isExiting) {
        controller.resetData(); // or whatever function you want to call
    }

  }
});
