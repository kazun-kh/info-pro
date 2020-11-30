class CreateWorkoutRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :workout_rooms do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
