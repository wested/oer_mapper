object @organization
attributes :name, :url, :uri, :ocw, :description
node(:lat) {|org| org.address.lat}
node(:long) {|org| org.address.long}
node(:address) {|org| org.address.address.present? ? org.address.address : "N/A"}
node(:languages) {|org| org.languages.map(&:name)}
node(:subjects) {|org| org.subjects.map{|s| subject_area_css_class_name(s.name)}}