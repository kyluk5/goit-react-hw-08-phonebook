import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addContact,
  getContact,
} from "../../redux/operations/contactsOperations";
import PfoneForm from "../../components/PhoneForm/PhoneForm";
import FindContact from "../../components/FindContact/FindContact";
import { CSSTransition } from "react-transition-group";
import "./Home.css";
import { contactsSelector } from "../../redux/selectors/contacts-selectors";
import { getCurrentUser } from "../../redux/operations/authOperations";

class Home extends Component {
  state = {
    name: "",
    number: "",
    value: false,
  };

  contactInputValue = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number, value } = this.state;
    if (this.props.contacts.find((item) => item.name === this.state.name)) {
      this.toggle(value);
      return;
    }
    this.props.addContact(name, number);
    this.setState({
      name: "",
      number: "",
    });
  };

  toggle = (status) => {
    this.setState({
      value: !status,
    });
  };

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getContact();
  }

  render() {
    const { name, number, value } = this.state;
    const test = () => {
      this.toggle(true);
    };

    return (
      <>
        <CSSTransition
          in={value}
          classNames="alert"
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          <button
            className="alert"
            onClick={test}
          >{`${name} alredy exist`}</button>
        </CSSTransition>

        <PfoneForm
          submitForm={this.submitForm}
          name={name}
          contactInputValue={this.contactInputValue}
          number={number}
        />
        <FindContact />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelector(state),
});

const mapDispatchToProps = {
  addContact,
  getCurrentUser,
  getContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
