json.array! @people do |person|
    json.partial! "api/v1/people/person", person:person
end