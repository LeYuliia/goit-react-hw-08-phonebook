import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter";
import { connect } from "react-redux";

const App = ({ contacts }) => {
  return (
    <>
      <section className="add-contact">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
      </section>
      <section className="contacts">
        <h2 className="title">Contacts</h2>
        {contacts && contacts.length > 2 && <Filter />}
        <ContactList />
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.phonebook.contacts,
  };
};

export default connect(mapStateToProps)(App);
