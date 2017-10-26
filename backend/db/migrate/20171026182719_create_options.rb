class CreateOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :options do |t|
      t.string :name
      t.belongs_to :question
      t.boolean :is_correct
      t.timestamps
    end
  end
end
