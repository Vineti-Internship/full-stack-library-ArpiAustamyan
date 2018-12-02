class BookSerializer < ActiveModel::Serializer
  attributes  :title, :year, :descriptin, :rating, :genre, :Author_id
end
