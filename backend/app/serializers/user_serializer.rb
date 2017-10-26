class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_type, :name, :email
  has_many :assigned_questions
end
