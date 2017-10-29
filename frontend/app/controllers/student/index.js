import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    studentClicked(student){
      this.transitionToRoute('student.assigned-questions', student.id)
    }
  }
});
