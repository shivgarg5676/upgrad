import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    questionClicked(question){
      this.transitionToRoute('student.answer-submission',this.get('model.id'), question.get('id'))
    }
  }
});
