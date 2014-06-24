class Organization < ActiveRecord::Base
  has_one :address

  has_many :organizations_users
  has_many :users, through: :organizations_users

  # TODO: possibly change these to has many through
  has_and_belongs_to_many :languages

  has_many :organizations_subjects
  has_many :subjects, :through => :organizations_subjects

  # TODO: validation that only 'Serendipity user' can modify these fields

  scope :for_subject, lambda{|subject| joins(:organizations_subjects => :subject).where(["subjects.name = ?",subject]) }
end
