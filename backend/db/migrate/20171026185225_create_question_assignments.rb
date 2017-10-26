class CreateQuestionAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :question_assignments do |t|
      t.belongs_to :user
      t.belongs_to :question
      t.timestamps
    end
    add_index :question_assignments, [:user_id, :question_id], unique: true
  end
end
