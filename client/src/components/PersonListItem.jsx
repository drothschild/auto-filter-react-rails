import React from 'react';

const PersonListItem = Person => (
  <div className="person-line-item">
    {Person.attributes.firstName} {Person.attributes.lastName}
  </div>
);

export default PersonListItem;
