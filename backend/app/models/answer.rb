class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :student, class_name: "User"
  has_many :answer_option_mappings
  has_many :marked_options, through: :answer_option_mappings, source: :option
end
