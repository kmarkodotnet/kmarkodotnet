export class Menu {
    Title: string;
    Icon: string;
    //Font: string;
    RouterLink: string;
    AdditionalClass: string;

    constructor(title: string, icon: string/*, font: string*/, routerLink: string, additionalClass: string){
        this.Title = title;
        this.Icon = icon;
        //this.Font = font;
        this.RouterLink = routerLink;
        this.AdditionalClass = additionalClass;
    }
  }