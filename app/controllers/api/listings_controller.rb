class Api::ListingsController < ApplicationController
  before_action :set_listing, only: %i[ show update destroy ]
  wrap_parameters include: Listing.attribute_names, format: :multipart_form

  def index
    @listings = Listing.all        
  end

  def show    
    if @listing 
            @host = User.find_by(id: @listing.host_id)
            
            render :show
    else
            render json: {errors: 'Lisitng not found'}, status: 422
    end
  end


  def create    
    @listing = current_user.listings.new(listing_params)    
    if params[:phtos]
      params[:photos].each do |photo|
        @listing.photos.attach(photo)
      end
    end

    if @listing.save
      render :show
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end


  def update
    if @listing.update(listing_params)
      render :show, status: :ok, location: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end


  def destroy
    @listing.destroy
  end

  private

    def set_listing
      @listing = Listing.find(params[:id])
    end

    def listing_params
      params.require(:listing).permit(:title, :description, :address, :state, :city, :zip_code, :price, photos:[])
    end
end
