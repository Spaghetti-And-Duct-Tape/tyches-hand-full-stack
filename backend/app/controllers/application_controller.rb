class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.credentials.jwt_secret_key!

  def encode_token(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end
end
