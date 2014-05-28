class Organization < ActiveRecord::Base
  has_one :address
  has_and_belongs_to_many :users
  has_and_belongs_to_many :languages
  has_and_belongs_to_many :subjects
  #TODO: validation that only 'Serendipity user' can modify these fields
end
