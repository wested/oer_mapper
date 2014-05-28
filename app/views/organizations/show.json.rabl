object @organization
attributes :name, :url, :uri, :ocw, :description
node(:lat) {|org| org.address.lat}
node(:long) {|org| org.address.long}
node(:address) {|org| org.address.address.present? ? org.address.address : "N/A"}
node(:languages) {|org| org.languages.map(&:name).join(',')}