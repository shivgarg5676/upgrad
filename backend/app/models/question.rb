class Question < ApplicationRecord
  has_many :options, dependent: :destroy
  has_many :quesiton_assignments
  has_many :students, class_name: 'User', through: :question_assignments, source: :user
  belongs_to :question_type
end
