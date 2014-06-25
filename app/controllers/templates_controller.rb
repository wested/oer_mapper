class TemplatesController < ApplicationController
  def show
    controller,action = params[:id].split("-")
    render "#{controller}/#{action}", layout: nil
  end
end
