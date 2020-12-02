class WorkoutRoom < ApplicationRecord
  has_many :workout_room_users, dependent: :destroy
  has_many :users,through: :workout_room_users　
  has_many :workout_messages, dependent: :destroy

  validates :name, presence: true
end
