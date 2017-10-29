class CreateAnswerOptionMappings < ActiveRecord::Migration[5.1]
  def change
    create_table :answer_option_mappings do |t|
      t.belongs_to :option
      t.belongs_to :answer
      t.timestamps
    end
  end
end
