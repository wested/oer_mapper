require 'rest_client'

desc "import orgs"
task :import_orgs => :environment do
  
  source_org_data = RestClient.get 'http://serendipity.utpl.edu.ec/map/bdd.php', { :accept => :json }

  source_org_data = source_org_data.gsub("Notice: Undefined index: callback in \/var\/www\/serendipity\/map\/bdd.php on line 47\n(", '').chop
  input_org_data_json = JSON.parse(source_org_data)

  input_org_data_json["university"].each do |u|
    # org = Organization.update_or_initialize

    # look at this! http://stackoverflow.com/questions/3024010/create-or-update-method-in-rails
    # separate calls for find_or_create_by name, then update_attributes.  lines 17-21 only updates attributes if you are creating a new org, doesn't update existing org attributes.

    org = Organization.find_or_create_by!(name: u["universityName"]) do |o|
                            o.url = u["universityURL"]
                            o.uri =  u["universityURI"]
                            o.ocw = u["universityOCWURL"]
                            o.description = u["universityDescription"]
                          

        end

        ser_user = User.includes(:roles).where('roles.name' => 'Serendipity')

        OrganizationsUser.find_or_create_by!(organization_id: org.id, user_id: ser_user.first.id)
        

    # all one rake task including everything
    # org.build_address(
    #                           organization_id: org_id,
#                             lat: u["universityLat"],
#                             long: u["universityLong"],
#                             country: u["universityCountry"],
#                             continent: u["universityContinent"],
#                             city: u["universityCity"],
#                             address: u["universityAddress"]
#     )
    # etc.
  end
end





# desc "import addresses"
# task :import_addresses => :environment do
#   input_org_address = JSON.parse(File.read('data_import/serendipity_data.json'))
#   input_org_address["university"].each do |u|

#     org_id = Organization.find_by_name(u["universityName"]).id

#     address = Address.new(
#                             organization_id: org_id,
#                             lat: u["universityLat"],
#                             long: u["universityLong"],
#                             country: u["universityCountry"],
#                             continent: u["universityContinent"],
#                             city: u["universityCity"],
#                             address: u["universityAddress"]
#       )
#   end
# end
