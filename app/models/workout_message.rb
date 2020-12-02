class WorkoutMessage < ApplicationRecord
  belongs_to :workout_room
  belongs_to :user
  has_one_attached :image

  validates :content, presence: true

end
