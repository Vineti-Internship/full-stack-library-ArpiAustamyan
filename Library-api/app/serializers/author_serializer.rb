class AuthorSerializer < ActiveModel::Serializer
  has_many :books
  attributes  :name ,:surname , :books
end
