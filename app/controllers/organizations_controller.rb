class OrganizationsController < ApplicationController

  respond_to :json, :html
  def index
    @organizations = Organization.all
  end

  def show
  end
end
