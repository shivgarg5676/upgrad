import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    // if(this.get('session.currentRole')!='teacher'){
    //   this.transitionTo('/')
    // }
  },
  model(){
    this.store.query('user',{me: true, type: this.get('session.currentRole')} )
  },
  setupController(controller, model){
    this._super(controller,model)
    controller.set('questions', this.store.findAll('question'));
  }
});
