Rails.application.routes.draw do
  devise_for :users
  get 'makers/index'
  root to: "makers#index"end
  
