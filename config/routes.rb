Rails.application.routes.draw do
  devise_for :users
  get 'work_outs/index'
  get 'zavass/index'
  get 'makers/index'
  root to: "makers#index"
  resources :makers 
    resources :work_outs, only: :index 
    resources :workout_rooms,  only: [:new, :create] do
      resources :workout_messages, only: [:index, :create]
    end
  
  resources :zavass, only: :index
end

