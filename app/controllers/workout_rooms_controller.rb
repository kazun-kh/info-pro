class WorkoutRoomsController < ApplicationController
  
  def new
    @workoutroom = WorkoutRoom.new
  end

  def create
    @workoutroom = WorkoutRoom.new(room_params)
    if @workoutroom.save
      redirect_to controller: :work_outs, action: :index
    else
      render :new
    end
  end

  private

  def room_params
    params.require(:workout_room).permit(:name )
  end
end
