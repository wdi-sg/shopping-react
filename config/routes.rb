Rails.application.routes.draw do
  get 'onepage/index' => 'onepage#index'
  get 'onepage/:id' => 'onepage#product'
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end