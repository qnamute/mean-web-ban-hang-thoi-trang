import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  carouselOptions = 
    {
      animateOut: 'bounceOutRight',
      animateIn: 'bounceInLeft',
      items: 1, 
      dots: true, 
      navigation: false, 
      loop:true,
      margin:10,
      autoplay: true,
    //  animateOut: 'fadeOut',
      autoHeight: true,
      autoHeightClass: 'owl-height',
      
  };
  
  //images array
  images = [
    {image:"https://i.pinimg.com/originals/c3/42/af/c342af9ff3f5e1380583c5f94e9b088f.jpg"},
    {image:"https://s3.envato.com/files/167020412/20_Billboard.jpg"},
    {image:"https://s3.envato.com/files/167020412/20_Billboard.jpg"}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
