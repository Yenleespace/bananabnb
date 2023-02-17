class Api::ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show update destroy ]
  wrap_parameters include: Review.attribute_names 


  def index
    @reviews = Review.where(listing_id: params[:listing_id])
  end

  def show
  end

  def create
    @review = Review.new(review_params)        
    @review.listing_id = params[:listing_id]
    @review.user = current_user
    @review.review = params[:comment]    
    if @review.save      
      render :show 
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def update
    if @review.update(review_params)
      render :show, status: :ok, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @review.destroy
  end

  private

    def set_review
      @review = Review.find(params[:id])
    end


    def review_params      
      params.require(:review).permit(:listing_id, :user_id,  :rating, :comment)
    end
end
