class AnswerSerializer < ActiveModel::Serializer
  attributes :id, :answer
  belongs_to :student
  belongs_to :question
  has_many :marked_options
end
