require 'rails_helper'

describe Api::V1::PeopleController, :type => :controller do
    describe "GET Index" do
        it "has 200 status" do
            get :index, :format => :json
            expect(response.status).to eq(200)
        end
        it "responds to json" do
            get :index, :format => :json
            expect(response.content_type).to eq "application/json"
        end
        it "renders index" do
            get :index, :format => :json
            expect(response).to render_template(:index)
        end
        it "assigns @people" do
            p = Person.create(first_name: "Jane", last_name: "Doe")
            get :index, :format => :json
            expect(assigns(:people)).to eq([p])
        end
    end
end
