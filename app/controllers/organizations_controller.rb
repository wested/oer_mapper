class OrganizationsController < ApplicationController

  respond_to :json
  def index

    @organizations = params[:subject] ? Organization.for_subject(params[:subject]) : Organization.all

  end

  def show
  end

  def create
    @organization = Organization.new(org_params)

    if @organization.save
       render "organizations/show", status: :created, location: @organization
    else
      render json: @organization.errors, status: :unprocessable_entity
    end

  end

private

  def org_params
    params.require(:organization).permit(:name, :description,:uri,:url,:date_started,:ocw)
  end
end
