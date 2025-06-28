class Api::V1::PlayersController < ApplicationController
  def create
    @player = Player.new(player_params)

    if @player.save
      token = encode_token(player_id: @player.id)
      render json: { 
        success: true, 
        token: token 
      }, status: :ok
    else
      render json: { 
        error: @player.errors.full_messages.to_sentence 
      }, status: :bad_request
    end
  end

  private

  def player_params
    params.require(:player).permit(:username, :password, :password_confirmation, :is_guest)
  end
end
