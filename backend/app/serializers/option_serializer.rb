class OptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :is_correct
  belongs_to :question
end
