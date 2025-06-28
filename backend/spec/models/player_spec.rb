require 'rails_helper'

RSpec.describe Player, type: :model do
  describe 'Validations' do
    let(:player) { FactoryBot.build(:player) }
    let(:guest_player) { FactoryBot.build(:guest_player) }

    context 'are valid' do
      it 'with basic attributes' do
        expect(player).to be_valid
      end

      it 'with guest account' do
        expect(guest_player).to be_valid
      end
    end

    context 'are invalid if registered' do
      [ :username,
        :password,
        :password_confirmation
      ].each do |field|
        it "with #{ field } is missing" do
          player.send("#{ field }=", nil)
          expect(player).not_to be_valid
          expect(player.errors[field]).to include("can't be blank")
        end
      end

      it 'with a duplicate username' do
        FactoryBot.create(:player, username: 'UniqueName')
        duplicate_player = FactoryBot.build(:player, username: 'UniqueName')
        expect(duplicate_player).not_to be_valid
      end

      it 'with a password less than 6 characters' do
        player.password = 'c' * 5
        expect(player).not_to be_valid
        expect(player.errors[:password]).to include('is too short (minimum is 6 characters)')
      end

      it 'with a password confirmation less than 6 characters' do
        player.password_confirmation = 'c' * 5
        expect(player).not_to be_valid
        expect(player.errors[:password_confirmation]).to include('is too short (minimum is 6 characters)')
      end

      it "with a password and confirmation that don't match" do
        player.password = 'password123'
        player.password_confirmation = 'password321'
        expect(player).not_to be_valid
        expect(player.errors[:password_confirmation]).to include("doesn't match Password")
      end

      it 'with a non-boolean is_guest' do
        player.is_guest = nil
        expect(player).not_to be_valid
        expect(player.errors[:is_guest]).to include('is not included in the list')
      end
    end
  end

  describe 'guest behavior' do
    context 'username' do
      it 'automatically assigns a guest username' do
        guest = FactoryBot.create(:guest_player)
        expect(guest.username).to match(/^Guest\d+$/)
      end
    end
  end

  describe 'Scopes' do
    let(:guest) { FactoryBot.create(:guest_player) }
    let(:player) { FactoryBot.create(:player) }

    context 'by_guest' do
      it 'returns only guest players' do
        expect(Player.by_guest(true)).to include(guest)
        expect(Player.by_guest(true)).not_to include(player)
      end

      it 'returns only guest players' do
        expect(Player.by_guest(false)).to include(player)
        expect(Player.by_guest(false)).not_to include(guest)
      end
    end
  end
end
