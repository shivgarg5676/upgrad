import Ember from 'ember';

export default Ember.Controller.extend({

  selectAllObserver: Ember.observer('selectAll',function(){
    this.get('questions').forEach((ques)=>{
      ques.set('isSelected', this.get('selectAll'))
    });
  }),

  actions:{
    assign(){

    },
    newQuestion(){
      this.transitionToRoute('question.new')
    }
  }
});
