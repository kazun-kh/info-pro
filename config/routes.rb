Rails.application.routes.draw do
  get 'makers/index'
  root to: "makers#index"end
