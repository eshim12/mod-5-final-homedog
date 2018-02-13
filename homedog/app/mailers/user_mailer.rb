class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3001/login'
    mail(to: user.email, subject: 'You have a reservation!')
  end

  def confirmation_email(user)
    @user = user
    @url = 'http://localhost:3001/login'
    mail(to: user.email, subject: 'Confirming your reservation')
  end
end
