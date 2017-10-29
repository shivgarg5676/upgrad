class UsersController < ApplicationController
  def index
    users = User.where(user_type: params[:type])
    if params[:me] == "true"
      render json: users.first
    else
      render json: users
    end
  end
  def show
    user = User.find(params[:id])
    render json: user
  end
  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user
  end
  def user_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params,  only: [:id,:name, :email,'assigned-questions','user-type'])
  end
end
