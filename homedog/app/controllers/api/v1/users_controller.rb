class Api::V1::UsersController < ApplicationController
  def index
  users = User.all
  # byebug
  render json: {user: users}
  # users, status: 200
  end

  def create
    user = User.create(user_params)
    render json: user, status: 201
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
    params.permit(:username, :full_name, :email, :password, :is_host)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
