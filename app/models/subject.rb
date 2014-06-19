class Subject < ActiveRecord::Base
  has_and_belongs_to_many :organizations

  SUBJECT_AREAS = ["Arts", "Business","Health","Information & Media Literacy","Language Arts","Mathematics & Statistics","Science","Social Studies","World Languages"]
end
