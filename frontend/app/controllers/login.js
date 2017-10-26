import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    login(){
      this.set('session.currentRole', this.get('selectedRole'))
      if(this.get('selectedRole') == 'teacher'){
        this.transitionToRoute('teacher')
      }else{
        this.transitionToRoute('student')
      }
    }
  }
});
