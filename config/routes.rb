Rails.application.routes.draw do
  get "onepage/index"
  get "products/search" => "products#searching"
  resources :carts
  resources :products
  devise_for :users
  root "onepage#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
