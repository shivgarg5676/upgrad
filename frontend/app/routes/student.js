import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if(this.get('session.currentRole')!='student'){
      this.transitionTo('/')
    }
  },
  model(){
    this.store.queryRecord('user',{me: true, type: this.get('session.currentRole')} )
  }

});
