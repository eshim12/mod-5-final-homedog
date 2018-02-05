class Api::V1::ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:index, :create]
  def index
  reviews = Review.all
  render json: reviews, status: 200
  end

  def create
    review = Review.create(review_params)
    render json: review, status: 201
  end

  def update
    @review.update(review_params)
    render json: @review, status: 200
  end

  def destroy
    reviewId = @review.id
    @review.destroy
    render json: {message:"Zap! review deleted", reviewId:reviewId}
  end

  def show
    render json: @review, status: 200
  end

  private
  def review_params
    params.permit(:reservation_id, :content)
  end

  def set_review
    @review = Review.find(params[:id])
  end
end
