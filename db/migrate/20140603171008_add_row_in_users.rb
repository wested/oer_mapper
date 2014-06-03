class AddRowInUsers < ActiveRecord::Migration
  def change
    User.create!(first_name: 'Serendipity', last_name: 'Serendipity', email: 'nomail@serendipity.utpl.edu.ec', password: '1q2w3e4r5t')
  end
end
