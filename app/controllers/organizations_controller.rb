class OrganizationsController < ApplicationController

  respond_to :json, :html
  def index
    @organizations = params[:subject] ? Organization.for_subject(params[:subject]).all : Organization.all
  end

  def show
  end
end
