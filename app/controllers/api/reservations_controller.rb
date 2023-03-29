class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[ show update destroy ]

  # GET /reservations
  # GET /reservations.json
  def index    
    if params[:listing_id]
        @reservations = Reservation.where(listing_id: params[:listing_id])
        render :index
    end

    if params[:user_id]            
        @reservations = Reservation.where(user_id: params[:user_id]).order(check_in_date: :asc)        
        render :index
    end
  end

  # GET /reservations/1
  # GET /reservations/1.json
  def show
  end

  # POST /reservations
  # POST /reservations.json
  def create    
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show      
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reservations/1
  # PATCH/PUT /reservations/1.json
  def update
    if @reservation.update(reservation_params)
      render :show, status: :ok, location: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  # DELETE /reservations/1.json
  def destroy
    @reservation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_params
      params.require(:reservation).permit(:user_id, :listing_id, :check_in_date, :check_out_date, :num_guests)
    end
end
