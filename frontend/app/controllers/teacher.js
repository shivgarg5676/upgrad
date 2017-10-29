import Ember from 'ember';

export default Ember.Controller.extend({
  showAssignmentDialog: false,
  selectAllObserver: Ember.observer('selectAll',function(){
    this.get('questions').forEach((ques)=>{
      ques.set('isSelected', this.get('selectAll'))
    });
  }),
  reset(){
    this.set('selectAll',false)
    this.get('questions').forEach((question)=> question.set('isSelected',false))
    this.set('showAssignmentDialog',false)
    this.get('students').forEach((student)=> student.set('isSelected',false))
  },

  actions:{
    assign(){
      this.toggleProperty('showAssignmentDialog')
    },
    newQuestion(){
      this.transitionToRoute('question.new')
    },
    closeDialog(){
      this.toggleProperty('showAssignmentDialog')
    },
    saveAssignment(){
      let selectedQuestions =  this.get('questions').filterBy('isSelected', true)
      let selectedStudents = this.get('students').filterBy('isSelected', true)
      selectedStudents.forEach((student)=>{
        student.set('assignedQuestions',selectedQuestions)
        student.save();
      })
      this.reset();
    }
  }
});
