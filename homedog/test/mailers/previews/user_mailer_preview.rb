# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview

  def welcome_email
    user = User.last
    nonhost = User.first
    UserMailer.welcome_email(user, nonhost)
  end

  def confirmation_email
    user = User.last
    host = User.first
    @url = 'http://localhost:3001/login'
    UserMailer.confirmation_email(user, host)
  end

  def delete_confirm_host
    user = User.last
    @url = 'http://localhost:3001/login'
    UserMailer.delete_confirm_host(user)
  end

  def delete_confirm_owner
    user = User.last
    @url = 'http://localhost:3001/login'
    UserMailer.delete_confirm_owner(user)
  end
end
