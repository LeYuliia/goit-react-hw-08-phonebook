import React, { Component } from "react";
import PT from "prop-types";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import { connect } from "react-redux";
import { fetchContact } from "../../redux/phonebook/phonebook-operations";
import selectors from "../../redux/phonebook/phonebook-selectors";
import "./Phonebook.scss";

class PhonebookView extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    const { contacts, filter } = this.props;
    return (
      <section className="phonebook">
        <div className="phonebook__form">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
        </div>
        <div className="phonebook__contacts">
          <h2 className="title">Contacts</h2>
          {contacts.length > 2 || filter.length > 0 ? <Filter /> : null}
          <ContactList />
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: selectors.getContacts(state),
    filter: selectors.getFilter(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchContact: () => dispatch(fetchContact()),
});

PhonebookView.propTypes = {
  fetchContact: PT.func.isRequired,
  contacts: PT.array.isRequired,
  filter: PT.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookView);
