Rails.application.routes.draw do
  resources :products
  get 'rootpage/index'
  root "products#index"
  post "search", to: "products#search" 
  post "calculate", to: "products#calculate" 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
