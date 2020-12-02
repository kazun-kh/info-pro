class CreateWorkoutMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :workout_messages do |t|
      t.string  :content
      t.references :workout_room, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
