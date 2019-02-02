import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactModel } from '../../models/contact.model';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  // Whether the contact is being modified.
  @Input() isInEditMode = false;
  @Output() isInEditModeChange = new EventEmitter<boolean>();

  // Sends the request to create a new contact.
  @Output() createContactRequest = new EventEmitter<void>();

  // Current active contact.
  @Input() set contact(val) {
    this._contact = val;
    if (this._contact) {
      this.updateForm(this.contact);
    } else {
      this.contactForm.reset();
    }
  }
  get contact(): ContactModel {
    return this._contact;
  }

  // Contact details form.
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    note: new FormControl('')
  });

  private _contact: ContactModel = new ContactModel();

  /** Updates the form with provided contact data. */
  updateForm(contact: ContactModel): void {
    this.contactForm.setValue({
      firstName: this._contact.firstName,
      lastName: this._contact.lastName,
      phone: this._contact.phone,
      email: this._contact.email,
      address: this._contact.address,
      note: this._contact.note
    });
  }

  /** Handles details form submission. */
  onSubmit(): void {
    this.setEditMode(false);
    this.contact.firstName = this.contactForm.value.firstName;
    this.contact.lastName = this.contactForm.value.lastName;
    this.contact.phone = this.contactForm.value.phone;
    this.contact.email = this.contactForm.value.email;
    this.contact.address = this.contactForm.value.address;
    this.contact.note = this.contactForm.value.note;
  }

  /** Handles the request to add a new contact. */
  onAddRequest(): void {
    this.createContactRequest.emit();
  }

  /** Sets the view/modify contact state. */
  setEditMode(state: boolean): void {
    this.isInEditModeChange.emit(state);
  }

  /** Tries to format the provided phone and returns the formatted string. */
  formatPhone(phone: string): string {
    return phone.replace(/(\d{3})(\d{3})(\d{2,4})/, '$1-$2-$3');
  }
}
