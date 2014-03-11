desc "import orgs"
task :import_orgs => :environment do
  input_org_data = JSON.parse(File.read('data_import/serendipity_data.json'))
  input_org_data["university"].each do |u|
    org = Organization.new (
                              universityName: "name",
                              universityURL: "url",
                              universityURI: "uri",
                              universityOCWURL: "ocw",
                              universityDescription: "description"

      )
    org.save
  end
end