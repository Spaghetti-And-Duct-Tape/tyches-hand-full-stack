class Player < ApplicationRecord

  ### Secure password with bcrypt
  has_secure_password
end
