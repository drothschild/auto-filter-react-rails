json.type 'people'
json.id person.id
json.attributes do
    json.firstName person.first_name
    json.lastName person.last_name
end