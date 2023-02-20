import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  public images = [

    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",

]

public imageSlide = this.images[0];
public interval: any;


public next(){
this.imageSlide = this.images[this.images.indexOf(this.imageSlide) + 1] ?? this.images[this.images.length -1];
}

public previous(){
this.imageSlide = this.images[this.images.indexOf(this.imageSlide) - 1] ?? this.images[0];
}


public start(){
const here = this;
this.interval = setInterval(
    function(here: any){
        const img = here.images.indexOf(here.imageSlide)
        if (img === here.images.length - 1){
            here.imageSlide = here.images[0];
        }
        else{
            here.imageSlide = here.images[img+1];

        }
    },
    1000,
    here
);
}

public stop(){
clearInterval(this.interval ?? null)
}

}
