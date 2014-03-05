# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :organization do
    name "MyString"
    url "MyString"
    uri "MyString"
    ocw "MyString"
    description "MyText"
    date_started "2014-03-04"
    verified false
    user nil
  end
end
