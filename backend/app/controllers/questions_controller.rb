class QuestionsController < ApplicationController
  def index
    render json: Question.all
  end

  def create

    question= Question.create(question_params);
    params[:data][:options].each do |option|
      option = Option.new(option_params(option))
      option.question = question
      option.save
    end
    render :json=> question
  end

  def question_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params,  only: [:title, :description,"instructions", 'question-type','ideal-answer'])
  end
  def option_params(option)
    ActiveModelSerializers::Deserialization.jsonapi_parse(option,  only: ['name','is-correct','question'])
  end

end
