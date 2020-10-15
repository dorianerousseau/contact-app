/**
 * Pour déclarer une classe comme composant de notre application, on importe "component" via @angular/core
 */
import { Component } from '@angular/core';


/*
C'est ce qu'on appelle un décorateur. Il va nous permettre de donner des renseignemments sur nos composants
*/
@Component({
  selector: 'app-root', // Le sélecteur est l'ID, l'identifaint unique au sein de l'application.
  templateUrl: './app.component.html', // C'est la partie visible de notre composant, c'est ce qui affiche à notre utilisateur.
  styleUrls: ['./app.component.css'] // Déclarer les styles CSS spécifique à ce composant.
})

/* La classe contient les données du composant. Dans notre architectire MVVM, notre classe correspond au Model. */
export class AppComponent {

  // -- Déclaration d'une variable / propriété
  title = 'Gestion de Contact';
  contactProfil = '';

  // -- Déclaration d'un objet contact
  unContact = {
    id: 1,
    name: 'Doriane Rousseau',
    email: 'doriane.rousseau@gmail.com',
    tel: '07 69 28 43 43'
  };

  // -- Déclaration d'un tableau de Contact
  mesContacts = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      email: 'hugo@biyn.media',
      tel: '07 83 97 15 15'
    },
    {
      id: 2,
      name: 'Vanessa DEHECQ',
      email: 'vanessa.dehecq@gmail.com',
      tel: '07 89 45 23 56'
    },
    {
      id: 3,
      name: 'Manon DERYDT',
      email: 'manon.derydt@gmail.com',
      tel: '07 96 52 41 23'
    },
    {
      id: 4,
      name: 'Olga KORDIAK',
      email: 'olga.kordiak@gmail.com',
      tel: '01 56 89 78 45'
    },
  ];

// Permet d'afficher les informations d'un objet Contact.
  displayContact(contactCliqueParMonUtilisateur): void {
    console.log(contactCliqueParMonUtilisateur);

    this.contactProfil = contactCliqueParMonUtilisateur;


  }


  /*
  Cette fonction
   */
  addContact(contact): void {
    this.mesContacts.push(contact);

  }





}
