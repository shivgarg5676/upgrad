class User < ApplicationRecord
  has_many :question_assignments
  has_many :assigned_questions, class_name: 'Question', through: :question_assignments, source: :question

end
