//let data = {
  //photo: "images/1.jpg",
  //title: "Abigél 1 hónapos",
  //description:
   // "Kicsit szomorú arcot vág, mert éppen most hagyta abba a sírást. Nem volt kedve fotózkodni. :)",
//};

// $("#photo").append("src", data.photo); // ez nem működik
// $("#photo-title").append(data.title);
// $("#photo-description").append(data.description);

let currentPhoto = 0;

let imagesData = [
    {
        photo: "images/1.jpg",
        title: "Abigél 1 hónapos",
        description:
          "Kicsit szomorú arcot vág, mert éppen most hagyta abba a sírást. Nem volt kedve fotózkodni. :)",
      },
      {
        photo: "images/2.jpg",
        title: "Abigél 2 hónapos",
        description:
          "2. kép",
      },
      {
        photo: "images/3.jpg",
        title: "Abigél 3 hónapos",
        description:
          "3. kép",
      },
      {
        photo: "images/4.jpg",
        title: "Abigél 4 hónapos",
        description:
          "4. kép",
      },
      {
        photo: "images/5.jpg",
        title: "Abigél 5 hónapos",
        description:
          "5. kép",
      },
      {
        photo: "images/6.jpg",
        title: "Abigél 6 hónapos",
        description:
          "6. kép",
      },
      {
        photo: "images/7.jpg",
        title: "Abigél 7 hónapos",
        description:
          "7. kép",
      },
];

// $("#photo").append("src", imagesData[currentPhoto].photo);
// $("#photo-title").append(imagesData[currentPhoto].title);
// $("#photo-description").append(imagesData[currentPhoto].description);


// a fotóknál nem működik:


let loadPhoto = (photoNumber) => {
  $("#photo").append("src", imagesData[photoNumber].photo);
  $("#photo-title").append(imagesData[photoNumber].title);
  $("#photo-description").append(imagesData[photoNumber].description);
};


$('#arrow_forward').click(() => {
    if(currentPhoto < 6) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
  });

  $('#arrow_back').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
  });


// nem működik:

// function addThumbnails(photo) {
//    $('#thumbnails').append('<img class="small-img">')
//    $('#small-img').append("src", photo)
// };

// imagesData.forEach(addThumbnails);







