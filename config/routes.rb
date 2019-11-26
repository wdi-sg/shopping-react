Rails.application.routes.draw do
  resources :products
  devise_for :users
   root to: "home#index"
  get 'onepage/index'
  get '/react' => 'onepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end