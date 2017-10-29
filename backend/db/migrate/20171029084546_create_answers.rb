class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.text :answer
      t.belongs_to :question
      t.belongs_to :student
      t.timestamps
    end
  end
end
