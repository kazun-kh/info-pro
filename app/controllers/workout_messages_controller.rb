class WorkoutMessagesController < ApplicationController

  before_action :authenticate_user!, only: :index


  def index
    @workout_message = WorkoutMessage.new
    @workout_room = WorkoutRoom.find(params[:workout_room_id])
    @workout_messages = @workout_room.workout_messages.includes(:user).order(id: "DESC").page(params[:page]).per(10)
    @workoutroom = WorkoutRoom.all.order(id: "DESC")
    
    end

  def create
    @room = WorkoutRoom.find(params[:workout_room_id])
    @message = @room.workout_messages.new(message_params)

    if @message.save
   
    ActionCable.server.broadcast 'message_channel', content: @message, user: current_user.nickname,  time: @message.created_at.strftime('%Y/%m/%d %H:%M:%S'), image: @message.image

    end 
  end

  private

  def message_params
   params.require(:workout_message).permit(:content, :image).merge(user_id: current_user.id)
  end
end
