class QuestionSerializer < ActiveModel::Serializer
  attributes :id,:title, :description, :instructions, :idealAnswer
  has_many :options
  belongs_to :question_type
end
