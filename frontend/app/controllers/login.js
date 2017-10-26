import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    login(){
      this.set('session.currentRole', this.get('currentRole'))
    }
  }
});
