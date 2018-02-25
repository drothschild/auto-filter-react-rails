json.array! @people do |person|
    json.partial! "api/v1/person", person:person
end