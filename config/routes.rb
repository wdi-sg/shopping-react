Rails.application.routes.draw do
  root 'pages#index'
  get '/products/:query' => 'products#search'
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end