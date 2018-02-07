class Api::V1::ReservationsController < ApplicationController
  skip_before_action :authorized, only: [:index, :create, :show]
  def index
  reservations = Reservation.all
  render json: reservations, status: 200
  end

  def create
    reservation = Reservation.create(reservation_params)
    render json: reservation, status: 201
  end

  def update
    @reservation.update(reservation_params)
    render json: @reservation, status: 200
  end

  def destroy
    # byebug
    reservation = Reservation.find(params[:id])
    if reservation.destroy
      render json: {message:"Zap! reservation deleted", id: reservation.id, pet_owner_id: reservation.pet_owner_id, host_id: reservation.host_id }
    else
      render json: {error: "DID NOT DELETE"}, status: 400
    end
  end

  def show
    @reservation = Reservation.find(params[:id])
    render json: @reservation, status: 200
  end

  private
  def reservation_params
    params.permit(:host_id, :pet_owner_id, :start_date, :end_date)
  end

  def set_reservation
    @reservation = Reservation.find(params[:id])
  end
end
