class UserMailer < ApplicationMailer
  default from: 'ellishim@gmail.com'

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3001/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
