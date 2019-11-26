Rails.application.routes.draw do
  resources :products
  get 'shopping/index'

  # get '/react' => 'shopping#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
