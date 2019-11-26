Rails.application.routes.draw do
  root 'onepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'products' => 'products#index'
  get 'products/search' => 'products#search'
end
