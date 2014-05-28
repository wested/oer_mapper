desc "import orgs"
task :import_orgs => :environment do
  #TODO: create migration to create Serendipity user, then when import data link all orgs to that user

  #TODO: change to pull from Serendipity
  # http://serendipity.utpl.edu.ec/map/bdd.php
  # say expect json, maybe don't need to say parse
  input_org_data = JSON.parse(File.read('data_import/serendipity_data.json'))
  input_org_data["university"].each do |u|
    # org = Organization.update_or_initialize
    org = Organization.new(
                            name: u["universityName"],
                            url: u["universityURL"],
                            uri:  u["universityURI"],
                            ocw: u["universityOCWURL"],
                            description: u["universityDescription"]
                            # user_id - serendipity user

      )
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
    org.save
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
