class CreateJoinTableOrganizationSubject < ActiveRecord::Migration
  def change
    create_join_table :organizations, :subjects do |t|
      # t.index [:organization_id, :subject_id]
      # t.index [:subject_id, :organization_id]
    end
  end
end
