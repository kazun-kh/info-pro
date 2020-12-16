require 'rails_helper'

RSpec.describe WorkoutMessage, type: :model do
  describe '#create' do
    before do
      @workout_message = FactoryBot.build(:workout_message)
    end

  it 'contentとimageが存在していれば保存できること' do
    expect(@workout_message).to be_valid
  end

  it 'contentが空でも保存できること' do
    @workout_message.content = nil
    expect(@workout_message).to be_valid
  end

  it 'imageが空でも保存できること' do
    @workout_message.image = nil
    expect(@workout_message).to be_valid
  end

  it 'contentとimageが空では保存できないこと' do
    @workout_message.content = nil
    @workout_message.image = nil
    @workout_message.valid?
    expect(@workout_message.errors.full_messages).to include("Content can't be blank")
  end

  it 'roomが紐付いていないと保存できないこと' do
    @workout_message.workout_room = nil
    @workout_message.valid?
    expect(@workout_message.errors.full_messages).to include("Workout room must exist")
  end

  it 'userが紐付いていないと保存できないこと' do
    @workout_message.user = nil
    @workout_message.valid?
    expect(@workout_message.errors.full_messages).to include("User must exist")
  end
end
end