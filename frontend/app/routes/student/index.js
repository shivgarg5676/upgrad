import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if(this.get('session.currentRole')!='student'){
      this.transitionTo('/')
    }
  },
  model(){
    return this.store.query('user',{type: this.get('session.currentRole')})
  }

});
