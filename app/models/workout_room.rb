class WorkoutRoom < ApplicationRecord
  has_many :workout_room_users
  has_many :users, through: :workout_room_users
end
