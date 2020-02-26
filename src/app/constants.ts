import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
    static socialMediaLinks: ISocialMediaLinks = {
        myFacebook: 'https://www.facebook.com/profile.php?id=100004749600054',
        myGithub: 'https://github.com/RomaniukRoman',
        myLinkedin: 'https://www.linkedin.com/in/roman-romaniuk-732685156/',
        myCV: 'https://docs.google.com/document/d/15hqewQ0S5gJYv7Dcxq4CyoCxBuPEb1EqpXj4hnJW5ZM/edit'
    };
}

export interface ISocialMediaLinks {
    myFacebook: string;
    myGithub: string;
    myLinkedin: string;
    myCV: string;
}