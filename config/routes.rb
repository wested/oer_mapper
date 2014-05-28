OerMapper::Application.routes.draw do

  devise_for :users

  resources :organizations

  root 'organizations#index'
end
