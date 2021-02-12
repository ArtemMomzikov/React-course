import './App.css';
import React, {Fragment} from 'react';
import {Table} from './ContactBook/table/table';
import {AddContactButton} from './ContactBook/add_contact_button/add_contact_button';

class App extends React.Component {
    state = {
        contacts: [
            {
                name: 'Джон',
                surname: 'Голд',
                phone: '+80939538673'
            },
            {
                name: 'Тони',
                surname: 'Старк',
                phone: '+70684523486',
            }
        ],
    }

    constructor(props) {
        super(props);
        this.handleAddContact = this.handleAddContact.bind(this);
    }

    handleAddContact(contact) {
        this.state.contacts.push(contact);
        let addedContact = this.state.contacts;
        this.setState({
            contacts: addedContact,
        });
    }

    render() {
        return (
            <Fragment>
                <Table contacts={this.state.contacts} />
                <AddContactButton onAddContact={this.handleAddContact} />
            </Fragment>
        );
    }
}

export default App;
