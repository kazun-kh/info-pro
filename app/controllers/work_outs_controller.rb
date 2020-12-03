class WorkOutsController < ApplicationController
  before_action :authenticate_user!, only: :index
  
  def index
  @workoutroom = WorkoutRoom.all.order(id: "DESC")
  
  
  end
end
