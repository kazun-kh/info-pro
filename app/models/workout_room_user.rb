class WorkoutRoomUser < ApplicationRecord
  belongs_to :workout_room
  belongs_to :user
end
