import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


const form = document.querySelector("#contact-form") as HTMLFormElement;
const nameInput = document.querySelector("#name") as HTMLInputElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const messageInput = document.querySelector("#message") as HTMLTextAreaElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    setErrorFor(nameInput, "Name cannot be blank");
  } else {
    setSuccessFor(nameInput);
  }

  if (emailValue === "") {
    setErrorFor(emailInput, "Email cannot be blank");
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(emailInput, "Email is not valid");
  } else {
    setSuccessFor(emailInput);
  }

  if (messageValue === "") {
    setErrorFor(messageInput, "Message cannot be blank");
  } else {
    setSuccessFor(messageInput);
  }

  // If all inputs are valid, you can submit the form here.
});

function setErrorFor(input: HTMLInputElement | HTMLTextAreaElement, message: string) {
  const formGroup = input.parentElement as HTMLElement;
  const feedbackMessage = formGroup.querySelector(".invalid-feedback") as HTMLElement;

  feedbackMessage.innerText = message;
  formGroup.classList.add("has-error");
  formGroup.classList.remove("has-success");
}

function setSuccessFor(input: HTMLInputElement | HTMLTextAreaElement) {
  const formGroup = input.parentElement as HTMLElement;
  formGroup.classList.add("has-success");
  formGroup.classList.remove("has-error");
}

function isEmailValid(email: string) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
