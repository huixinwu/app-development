// import the component structure from Angular
import { Component} from "@angular/core";

// declare the use of Component in this file
@Component({
    standalone: true,
    selector: 'products', // the tag use to load the component page
    templateUrl: './products.component.html' // loading page for 'products' component
})

export class ProductComponent{

}