Rails.application.routes.draw do
  get 'work_outs/index'
  get 'zavass/index'
  devise_for :users
  get 'makers/index'
  root to: "makers#index"
  resources :makers do 
    resources :work_outs, only: :index
    resources :zavass, only: :index
  end
end

