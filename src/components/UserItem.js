import React from 'react';
import { Card } from 'react-bootstrap';

const UserItem = ({ first_name, last_name, email, domain, avatar, gender, available }) => {
  return (
    <Card className="user">
      <Card.Img variant="top" src={avatar} className="user__image" />
      <Card.Body>
        <Card.Title className="user__name">{first_name+" "+last_name}</Card.Title>
        <Card.Text className="user__details">
          <span>
            <strong>Email:</strong> {email}
          </span>
          <span>
            <strong>Domain:</strong> {domain}
          </span>
          <span>
            <strong>Gender:</strong> {gender}
          </span>
          <span>
            <strong>Availability:</strong> {available?"Yes":"No"}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;