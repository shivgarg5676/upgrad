class UsersController < ApplicationController
  def index
    users = User.find_by_user_type(params[:type])
    render json: users
  end
end
