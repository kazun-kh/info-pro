require 'rails_helper'

RSpec.describe WorkoutRoom, type: :model do
  describe '#create' do
    before do
      @workout_room = FactoryBot.build(:workout_room)
    end

    it "nameの値が存在すれば登録できること" do
      expect(@workout_room).to be_valid
    end

    it "nameが空では登録できないこと" do
      @workout_room.name = nil
      @workout_room.valid?
      expect(@workout_room.errors.full_messages).to include("Name can't be blank")
    end
  end
end