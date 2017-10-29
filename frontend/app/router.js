import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', {path:'/'});
  this.route('teacher');
  this.route('student', function() {
    this.route('assigned-questions',{path: '/:id/assigned-questions'});
    this.route('answer-submission',{path: '/:id/question/:questionId/answer-submission'});
  });

  this.route('question', function() {
    this.route('new');
  });
});

export default Router;
