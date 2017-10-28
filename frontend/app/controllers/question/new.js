import Ember from 'ember';

export default Ember.Controller.extend({

  questionViewPartial: null,

  setQuestionType: Ember.observer('selectedQuestionTypeId', function(){
    this.set('question.questionType', this.get('questionTypes').filterBy('id', this.get('selectedQuestionTypeId')).get('firstObject'))
    this.set('questionViewPartial', "new-" + this.get('question.questionType.name').toLowerCase() + "-question")
  }),

  resetData(){
    if(this.get('question.isDirty') || this.get('question.id') == null){
      this.get('question').rollbackAttributes();
    }
  },

  actions:{
    saveQuestion(){
      if(this.get('question.questionType.name') != 'MCQ'){
        this.set('question.options',[])
      }
      this.get('question').save().then(()=>{
        this.transitionTo('teacher')
      })
    }
  }
});
