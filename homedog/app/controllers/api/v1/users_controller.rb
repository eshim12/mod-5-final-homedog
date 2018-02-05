class Api::V1::UsersController < ApplicationController
  skip_before_action :authorized, only: [:index, :create]
  def index
  users = User.all
  # byebug
  render json: users, status: 200
  end

  def create
    user = User.new(user_params)
    if user.save
      token = issue_token(user)
      render json: {id: user.id, username: user.username, jwt: token}, status: 201
    end
  end

  def update
    @user.update(user_params)
    render json: @user, status: 200
  end

  def destroy
    userId = @user.id
    @user.destroy
    render json: {message:"Zap! user deleted", userId:userId}
  end

  def show
    render json: @user, status: 200
  end

  private
  def user_params
    params.permit(:username, :full_name, :email, :password, :is_host, :img, :description)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
