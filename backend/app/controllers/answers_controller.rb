class AnswersController < ApplicationController
  def create
    answer = Answer.create(answer_params)
    render :json => answer
  end

  def answer_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params,  only: [:id,:answer,'question','student','marked-options'])
  end

end
