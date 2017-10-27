class UsersController < ApplicationController
  def index
    users = User.where(user_type: params[:type])
    render json: users
  end
end
