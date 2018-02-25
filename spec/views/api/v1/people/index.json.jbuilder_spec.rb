require "rails_helper"
describe "api/v1/people/index" do
    before(:each) do
        assign(:people, [
            Person.create!(:first_name => "Jane", :last_name => "Doe")
        ])
    end
    it "displays the first name" do
        render

        expect(rendered).to match /Jane/
    end
    it "displays the last name" do
        render

        expect(rendered).to match /Doe/
    end
end