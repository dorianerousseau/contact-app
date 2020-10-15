import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  @Output() newContactEvent = new EventEmitter();

  // on déclare un nouvel objet vide
  nouveauContact = {
    name: null,
    email: null,
    tel: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  // Cette fonction se déclenche à la soumission du formulaire.
  submitContact(): void { // void retourne rien
    // console.log( this.nouveauContact );

    /*
    Lorsque le formulaire est soumis,
    j'emet un événement qui sera écouté par mon application
    et qui récupèrera les données du nouveau contact.
     */

    this.newContactEvent.emit( this.nouveauContact );

    // on réinitialise notre nouveau contact apres la soumission.
    this.nouveauContact = {
      name: null,
      email: null,
      tel: null
    };
  }
}
