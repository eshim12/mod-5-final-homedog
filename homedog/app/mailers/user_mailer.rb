class UserMailer < ApplicationMailer
  default from: 'homedog.test@gmail.com'

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3001/login'
    mail(to: "ellishim@gmail.com", subject: 'Welcome to My Awesome Site')
  end
end
