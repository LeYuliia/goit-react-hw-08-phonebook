import React from "react";
import { connect } from "react-redux";
import PT from "prop-types";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import selectors from "../../redux/phonebook/phonebook-selectors";
//Styles:
import "./ContactList.scss";
import { ListGroup, Button } from "react-bootstrap";

const ContactList = ({ phonebook, onDeleteContact }) => (
  <ListGroup variant="flush" className="contact-list">
    {phonebook.map(({ name, number, id }) => (
      <ListGroup.Item key={id} className="contact-list__item">
        <p className="contact-list__text">
          {name}: {number}
        </p>
        <Button
          className="contact-list__button"
          variant="outline-danger"
          size="sm"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </Button>
      </ListGroup.Item>
    ))}
  </ListGroup>
);

const mapStateToProps = (state) => ({
  phonebook: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  phonebook: PT.array.isRequired,
  onDeleteContact: PT.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
