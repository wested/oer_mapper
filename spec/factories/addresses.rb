# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :address do
    continent "MyString"
    country "MyString"
    city "MyString"
    address "MyString"
    lat "9.99"
    long "9.99"
    organization nil
  end
end
