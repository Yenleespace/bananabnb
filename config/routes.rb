Rails.application.routes.draw do
  
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :listings do
      resources :reviews, only:[:index]
    end
    resources :reviews, only: [:create, :destroy, :update, :show]

end
# get '*path', to: "static_pages#frontend_index"

end
