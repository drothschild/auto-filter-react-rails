import React from 'react';

const PersonLineItem = ({ person }) => (
  <div className="person-line-item">
    {person.attributes.firstName} {person.attributes.lastName}
  </div>
);

export default PersonLineItem;
