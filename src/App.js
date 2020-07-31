import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter";
import { connect } from "react-redux";

const App = ({ contacts, filter }) => {
  return (
    <>
      <section className="add-contact">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </section>
      <section className="contacts">
        <h2 className="title">Contacts</h2>
        {contacts.length > 2 || filter.length > 0 ? <Filter /> : null}
        <ContactList />
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
    filter: state.phonebook.filter,
  };
};

export default connect(mapStateToProps)(App);
