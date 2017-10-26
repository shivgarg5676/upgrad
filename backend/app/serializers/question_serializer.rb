class QuestionSerializer < ActiveModel::Serializer
  attributes :id,:title, :description, :instructions, :question_type, :idealAnswer
  has_many :options
end
