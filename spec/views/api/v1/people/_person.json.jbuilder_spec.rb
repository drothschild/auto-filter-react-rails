require "rails_helper"
describe "api/v1/people/_person partial" do
    before(:each) do
        @person = Person.create!(:first_name => "Jane", :last_name => "Doe")
        render :partial => "api/v1/people/person", :locals => {person:@person}
    end

    it "displays the first name" do
        expect(rendered).to match /Jane/
    end
    it "displays the last name" do
        expect(rendered).to match /Doe/
    end
    it "displays the id" do
        expect(rendered).to match /#{Regexp.quote(@person.id.to_s)}/
    end
end