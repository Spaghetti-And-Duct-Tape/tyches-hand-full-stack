require 'rails_helper'

RSpec.describe "Api::V1::Players", type: :request do
  let(:json_response) { JSON.parse(response.body) }

  let(:player) { create(:player) }
  let(:guest) { create(:guest_player) }

  #Generate a valid JWT for the given player
  def auth_header_for(player)
    token = JsonWebToken.encode(player_id: player.id)
    { 'Authorization' => "Bearer #{ token }" }
  end

  describe "POST #create" do
    context 'with valid parameters' do
      it 'creates a new player and returns a token' do
        expect {
          post '/api/v1/players', params: { player: {
            username: 'testuser',
            password: 'password',
            password_confirmation: 'password'
          }}
        }.to change(Player, :count).by (1)
        expect(response).to have_http_status(:ok)
        expect(json_response['success']).to be_truthy
        expect(json_response).to have_key('token')
      end
    end

    context 'with a guest account' do
      it 'creates a new player and returns a token' do
        expect {
          post '/api/v1/players', params: { player: {
            username: nil,
            password: nil,
            password_confirmation: nil,
            is_guest: true
          }}
        }.to change(Player, :count).by (1)
        expect(response).to have_http_status(:ok)
        expect(json_response['success']).to be_truthy
        expect(json_response).to have_key('token')
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new player and returns errors' do
        expect {
          post '/api/v1/players', params: { player: {
            username: nil,
            password: 'pass',
            password_confirmation: 'pass'
          }}
        }.not_to change(Player, :count)
        expect(response).to have_http_status(:bad_request)
        expect(json_response['error']).to include("Username can't be blank, Password is too short (minimum is 6 characters), and Password confirmation is too short (minimum is 6 characters)")
      end
    end
  end
end
