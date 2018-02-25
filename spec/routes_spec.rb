require "rails_helper"

describe "Routes for People API", :type => :routing do
    it "Routes to the people controller for index with a default of json" do
        expect(get("/api/v1/people")).to route_to(:controller => "api/v1/people", :action => "index", "format"=>:json)
    end
end