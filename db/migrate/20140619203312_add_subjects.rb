class AddSubjects < ActiveRecord::Migration
  def change
    ["Arts", "Business","Health","Information & Media Literacy","Language Arts","Mathematics & Statistics","Science","Social Studies","World Languages"].each do |subject|
      Subject.create!(name:subject)
    end
  end
end
