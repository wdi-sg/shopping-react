Rails.application.routes.draw do
  get 'onepage/index'
  resources :items
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
