desc "import orgs"
task :import_orgs => :environment do
  input_org_data = JSON.parse(File.read('data_import/serendipity_data.json'))
  input_org_data["university"].each do |u|
    org = Organization.new(
                            name: u["universityName"],
                            url: u["universityURL"],
                            uri:  u["universityURI"],
                            ocw: u["universityOCWURL"],
                            description: u["universityDescription"]

      )
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
