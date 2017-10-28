class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :title
      t.text :description
      t.text  :instructions
      t.string :idealAnswer
      t.belongs_to  :question_type
      t.timestamps
    end
  end
end
