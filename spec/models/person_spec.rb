require 'rails_helper'

describe Person, :type => :model do
    context :creation do
        it "creates a blank person" do
            p = Person.new
            expect(p.valid?).to be true
        end
        it "has a first name" do
            p = Person.new(first_name: "Jane")
            expect(p.valid?).to be true
        end
        it "has a last name" do
            p = Person.new(last_name: "Doe")
            expect(p.valid?).to be true
        end
    end
end
