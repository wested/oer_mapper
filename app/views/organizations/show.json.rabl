object @organization
attributes :name, :url, :uri, :ocw, :description
node(:lat) {|org| org.address.lat if org.address.present? && org.address.lat.present?}
node(:long) {|org| org.address.long if org.address.present? && org.address.long.present?}
node(:address) {|org| org.address.present? && org.address.address.present? ? org.address.address : "N/A"}

node(:languages) {|org| org.languages.map(&:name) if org.try(:languages) }
node(:subjects) {|org| org.subjects.map{|s| subject_area_css_class_name(s.name) if org.try(:subjects)}}