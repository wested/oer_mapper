class TemplatesController < ApplicationController
  def show
    controller,action = params[:id].split("-")
    render partial:"#{controller}/#{action}", layout: nil
  end
end
