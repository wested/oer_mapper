OerMapper::Application.routes.draw do

  devise_for :users

  root 'organizations#index'

  resources :organizations

  resources :templates, only: [:show]


end
