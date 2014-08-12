class AddSerendipityUserWithRole < ActiveRecord::Migration
  def change
    Role.create!(name: 'Serendipity')
    
    User.create!(first_name: 'Serendipity', last_name: 'Serendipity', email: 'nomail@serendipity.utpl.edu.ec', password: '1q2w3e4r5t')

    ser_role = Role.find_by(name: 'Serendipity')
    ser_user = User.find_by(email: 'nomail@serendipity.utpl.edu.ec')
    ser_user.roles << ser_role
  end
end
