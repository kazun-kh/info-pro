class WorkoutMessage < ApplicationRecord
  belongs_to :workout_room
  belongs_to :user

  validates :content, presence: true

end
