import { Book } from "./book.model";

export class Datasource{
    // create an array to store all books
    private books:Book[]

    constructor(){
        this.books = new Array<Book>(
            new Book(1,"Awesome kitchen experience", "Megan Hall", 36),
            new Book(2, "General Science", "Faulkner/Oard", 110),
            new Book(3, "Hello from Planet Earth!, " ,"Gusto", 16)
        )
    }

    // method to that returns the list of the books
    getBooks():Book[]{
        return this.books
    }
}