module OrganizationsHelper
  def subject_area_css_class_name(subject)
    subject.gsub(" ","").gsub("&","").downcase
  end
end
