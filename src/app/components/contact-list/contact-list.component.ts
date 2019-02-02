import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContactModel } from '../../models/contact.model';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  // The list of contacts to display.
  @Input() contacts: ContactModel[];
  // Whether the contact is being modified.
  @Input() isInEditMode: boolean;
  // Selected contact id.
  @Input() activeContactId: number;

  // Sends the request to view the contact.
  @Output() viewContactRequest = new EventEmitter<number>();
  // Sends the request to delete the contact.
  @Output() deleteContactRequest = new EventEmitter<number>();

  /** Handles contact selection. */
  onContactSelect(contactId: number): void {
    this.viewContactRequest.emit(contactId);
  }

  /** Whether contact has assigned name. */
  hasName(contact: ContactModel): boolean {
    return !!(contact.firstName || contact.lastName);
  }

  /** Returns full name of the contact or default title if not assigned. */
  getFullName(contact: ContactModel): string {
    return this.hasName(contact) ?
      `${contact.firstName} ${contact.lastName}` : 'No Name';
  }

  /** Handles contact delete request. */
  onRemoveClick(contact: ContactModel): void {
    if (confirm(`Are you sure to delete ${this.getFullName(contact)}?`)) {
      this.deleteContactRequest.emit(contact.id);
    }
  }

  /**
   * Returns contacts sorted by last and first name and mapped to the letter.
   */
  getContactMap(contacts: ContactModel[]): Map<string, ContactModel[]> {
    const updatedContactMap = contacts.reduce((allContacts, contact) => {
      const contactLetter = contact.lastName.charAt(0).toLocaleUpperCase() ||
        contact.firstName.charAt(0).toLocaleUpperCase();
      if (!allContacts.has(contactLetter)) {
        allContacts.set(contactLetter, [contact]);
      } else {
        allContacts.get(contactLetter).push(contact);
      }
      return allContacts;
    }, new Map<string, ContactModel[]>());
    updatedContactMap.forEach(
      (contactList) => contactList.sort((aContact, bContact) => {
        const compareResult =
          aContact.lastName.localeCompare(bContact.lastName);
        if (compareResult !== 0) {
          return compareResult;
        }
        return aContact.firstName.localeCompare(bContact.firstName);
      }));
    return updatedContactMap;
  }
}
