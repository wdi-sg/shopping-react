Rails.application.routes.draw do
    root 'onepage#index'
    get '/' => 'onepage#index'
    resources :products
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
