
import { Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('slideWithNav') slideWithNav: Slides;
 @ViewChild('slideWithNav2') slideWithNav2: Slides;
 @ViewChild('slideWithNav3') slideWithNav3: Slides;

 sliderOne: any;
 sliderTwo: any;
 sliderThree: any;

 //Configuration for each Slider
slideOptsOne = {
  initialSlide: 0,
  slidesPerView: 1,
  autoplay:true
};
slideOptsTwo = {
  initialSlide: 1,
  slidesPerView: 2,
  loop: true,
  centeredSlides: true
};
slideOptsThree = {
  initialSlide: 0,
  slidesPerView: 3
};

constructor(
) {
  //Item object for Nature
  this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          image: '../../assets/images/1.jpg'
        },
        {
          id: 2,
          image: '../../assets/images/2.jpg'
        },
        {
          id: 3,
          image: '../../assets/images/3.jpg'
        }
      ]
    };
  }

  //Move to Next slide
slideNext(object, slideView) {
  slideView.slideNext(500).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });
}

//Move to previous slide
slidePrev(object, slideView) {
  slideView.slidePrev(500).then(() => {
    this.checkIfNavDisabled(object, slideView);
  });;
}

//Method called when slide is changed by drag or navigation
SlideDidChange(object, slideView) {
  this.checkIfNavDisabled(object, slideView);
}

//Call methods to check if slide is first or last to enable disbale navigation
checkIfNavDisabled(object, slideView) {
  this.checkisBeginning(object, slideView);
  this.checkisEnd(object, slideView);
}

checkisBeginning(object, slideView) {
  slideView.isBeginning().then((istrue) => { 
    object.isBeginningSlide = istrue;
  });
}
checkisEnd(object, slideView) {
  slideView.isEnd().then((istrue) => {
    object.isEndSlide = istrue;
  });
}

  Banners = [
    'assets/banners/p1.jpg',
    'assets/banners/p2.jpg',
    'assets/banners/p3.jpg'
  ]
}
