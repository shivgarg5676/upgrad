class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :title
      t.text :description
      t.text  :instructions
      t.string :question_type
      t.string :idealAnswer
      t.timestamps
    end
  end
end
