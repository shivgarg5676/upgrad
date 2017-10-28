class OptionsController < ApplicationController
  def show
    option = Option.find(params[:id])
    render :json => option
  end
end
