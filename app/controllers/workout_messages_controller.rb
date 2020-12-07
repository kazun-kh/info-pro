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
    redirect_to  workout_room_workout_messages_path(@room)
    end 
  end

  private

  def message_params
   params.require(:workout_message).permit(:content, :image).merge(user_id: current_user.id)
  end
  
end
