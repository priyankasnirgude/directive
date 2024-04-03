import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})

export class ProductComponent implements OnInit{
    productName : string = "Samsung";
    productId : number = 1234;
    isProdAvailable !: boolean;
    resp : string = `<p class="alert alert-info">I Love Angular</p>`
    userName : string = "Jhon";

    imgUrl : string = `https://images.unsplash.com/photo-1711926641543-a37d9a020571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D`;
    getProductName():string{
        return `Iphone 15`
    }
    ngOnInit(): void {
        this.isProdAvailable = (Math.random() > .5) ? true : false
    }

    getBgColor(){
        // if(this.isProdAvailable){
        //     return "orange"
        // }else{
        //     return "#ccc"
        // }

        return this.isProdAvailable ? 'orange' : '#ccc'
    }
}
