Rails.application.routes.draw do
  get "pages/index"
  resources :carts
  resources :products
  root "pages#index"
  devise_for :users
  match "*path", to: "pages#index", via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
