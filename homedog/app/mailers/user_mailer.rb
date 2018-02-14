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

  def delete_confirm_host(host)
    @host = host
    @url = 'http://localhost:3001/login'
    mail(to: host.email, subject: 'Your reservation has been cancelled')
  end

  def delete_confirm_owner(user)
    @user = user
    @url = 'http://localhost:3001/login'
    mail(to: user.email, subject: 'Your reservation has been cancelled')
  end
end
