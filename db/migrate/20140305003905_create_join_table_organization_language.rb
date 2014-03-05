class CreateJoinTableOrganizationLanguage < ActiveRecord::Migration
  def change
    create_join_table :organizations, :languages do |t|
      # t.index [:organization_id, :language_id]
      # t.index [:language_id, :organization_id]
    end
  end
end
