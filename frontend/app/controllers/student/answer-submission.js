import Ember from 'ember';

export default Ember.Controller.extend({
  isMcqType: Ember.computed('mode.question', "model.question.questionType",'model.question.questionType.name',function(){
    if(this.get('model.question.questionType.name') == 'MCQ'){
      return true
    }else{
      return false
    }
  }),
  resetData(){
    this.get('model.question.options').forEach((option)=> option.set('isMarked', true))
    this.get('model.answer').rollbackAttributes();
  },
  actions:{
    saveAnswer(){
      this.set('model.answer.question', this.get('model.question'));
      this.set('model.answer.student', this.get('model.student'))
      if (this.get('isMcqType')) {
        let markedOptions =this.get('model.question.options').filterBy('isMarked', true);
        this.set('model.answer.markedOptions', markedOptions)
        if(markedOptions.length>0){
          this.get('model.answer').save();
        }
      } else {
        this.set('model.answer.question', this.get('model.question'));
        this.set('model.answer.student', this.get('model.student'))
        this.get('model.answer').save();
      }
      this.reset()
      this.transitionToRoute('student')
    }
  }

});
