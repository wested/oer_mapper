class AddLookupNameToSubjects < ActiveRecord::Migration
  def change
    add_column :subjects, :lookup_name, :string

    Subject.all.each do |subject|
      subject.update_attribute(:lookup_name,subject.name.gsub(" ","").gsub("&","").downcase)
    end
  end
end
