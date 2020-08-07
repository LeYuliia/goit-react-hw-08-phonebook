import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter";
import { connect } from "react-redux";
import { fetchContact } from "./redux/phonebook/operations";
import selectors from "./redux/phonebook/selectors";

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    const { contacts, filter } = this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
