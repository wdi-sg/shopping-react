Rails.application.routes.draw do
  get '/' => 'onepage#index'
  get 'onepage/index'
  get '/products/search'
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end