class WorkoutMessagesController < ApplicationController

  def index
    @workout_message = WorkoutMessage.new
    @workout_room = WorkoutRoom.find(params[:workout_room_id])
   
  end

  def create
    @room = WorkoutRoom.find(params[:workout_room_id])
    @message = @room.messages.new(message_params)
    if @message.save
      redirect_to  workout_room_workout_messages(@room)
    else
      render :index
    end 
  end

  private

  def message_params
    params.require(:workout_message).permit(:content).merge(user_id: current_user.id)
  end
end
