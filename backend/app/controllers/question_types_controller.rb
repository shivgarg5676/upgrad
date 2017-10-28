class QuestionTypesController < ApplicationController
  def index
    question_types = QuestionType.all
    render :json => question_types
  end
  def show
    question_type = QuestionType.find(params[:id])
    render :json => question_type
  end
end
