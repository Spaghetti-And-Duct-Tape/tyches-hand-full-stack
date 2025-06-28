class Player < ApplicationRecord

  ### Callbacks
  before_validation :assign_guest_username, if: :is_guest?

  ### Secure password with bcrypt
  has_secure_password validations: false

  ### Validations
  # Register
  validates :username, 
    presence: true, 
    uniqueness: true
  validates :password, 
    confirmation: true, 
    presence: true, 
    length: { minimum: 6 },
    unless: :is_guest?
  validates :password_confirmation, 
    presence: true, 
    length: { minimum: 6 },
    unless: :is_guest?
  validates :is_guest, 
    inclusion: { in: [true, false] }

  ### Scopes
  scope :by_guest, ->(is_guest) { where(is_guest: is_guest) }
  
  private

  def assign_guest_username
    self.username = "Guest#{ Time.now.to_i }" if username.blank?
  end
end
