require 'rails_helper'

RSpec.describe Player, type: :model do
  describe 'Validations' do
    let(:player) { FactoryBot.build(:player) }

    context 'basic attributes' do
      it 'is valid with a username and password' do
        expect(player).to be_valid
      end
    end
  end
end
