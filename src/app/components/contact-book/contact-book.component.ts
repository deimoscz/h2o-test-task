import { Component } from '@angular/core';
import { ContactModel } from '../../models/contact.model';
import { MOCK_CONTACTS } from '../../models/mock-contacts';


@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.scss']
})
export class ContactBookComponent {
  // The list of all contacts.
  contacts: ContactModel[];
  // Current selected active contacts.
  activeContact: ContactModel;
  // Whether the contact is being modified at the moment.
  isInEditMode = false;

  private nextGeneratedId = MOCK_CONTACTS.length + 2;

  constructor() {
    this.contacts = MOCK_CONTACTS;
  }

  /**
   * Handles requests to view the contact.
   */
  onViewContactRequest(contactId: number): void {
    this.activeContact = this.contacts.find(
      (contact) => contact.id === contactId);
    this.isInEditMode = false;
  }

  /**
   * Handles requests to create the contact.
   */
  onCreateContactRequest(): void {
    const newContact = new ContactModel();
    newContact.id = this.nextGeneratedId++;
    this.contacts.push(newContact);
    this.activeContact = newContact;
    this.isInEditMode = true;
  }

  /**
   * Handles requests to delete the contact.
   */
  onDeleteContactRequest(contactId: number): void {
    const contactIdx = this.contacts.findIndex(
      (contact) => contact.id === contactId);
    this.contacts.splice(contactIdx, 1);
    this.activeContact = null;
    this.isInEditMode = false;
  }
}
