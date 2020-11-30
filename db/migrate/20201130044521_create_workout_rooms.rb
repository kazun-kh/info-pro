class CreateWorkoutRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :workout_rooms do |t|

      t.timestamps
    end
  end
end
