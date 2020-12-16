FactoryBot.define do
  factory :workout_message do
    content {Faker::Lorem.sentence}
    association :user
    association :workout_room

    after(:build) do |workout_message|
      workout_message.image.attach(io: File.open('public/images/test_image.png'), filename: 'test_image.png')
    end
  end
end
