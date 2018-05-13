//declaring variables to determined if a button was clicked
var vansCmpny;
var appleCmpny;
var vice;
var vidyard;
$(document).ready(function(){

  $.ajax({
    url:"Companies.json",
    data:{},
    type:"GET",
    dataType:"json",
    success: function(info){
        var companies = info.company;
          //Vans info being displayed
          var vans =   "<img src='" + companies[0].image + "'</img>" + "</br>" + companies[0].name + "</br>" + companies[0].city + "</br>" + companies[0].province +
          "</br>" + companies[0].website + "</br>" + companies[0].phone + "</br>" + companies[0].latitude + "</br>" + companies[0].longitude;
          $("#vans").append(vans);
          //apple info being displayed
          var apple =   "<img src='" + companies[1].image + "'</img>" + "</br>" + companies[1].name + "</br>" + companies[1].city + "</br>" + companies[1].province +
          "</br>"   + companies[1].website + "</br>" + companies[1].phone + "</br>" + companies[1].latitude + "</br>" + companies[1].longitude;;
          $("#apple").append(apple);
          //Vice info being displayed
          var vice =   "<img src='" + companies[2].image + "'</img>" + "</br>" + companies[2].name + "</br>" + companies[2].city + "</br>" + companies[2].province +
          "</br>"   + companies[2].website + "</br>" + companies[2].phone + "</br>" + companies[2].latitude + "</br>" + companies[2].longitude;;
          $("#vice").append(vice);
          //vidyard info being displayed
          var vidyard =   "<img src='" + companies[3].image + "'</img>" +"</br>"+ companies[3].name + "</br>" + companies[3].city + "</br>" + companies[3].province +
          "</br>"  + companies[3].website + "</br>" + companies[3].phone + "</br>" + companies[3].latitude + "</br>" + companies[3].longitude;;
          $("#vidyard").append(vidyard);

          var map = $("#mapicon");
          var map2 = $("#mapicon2");

          map.click(function(){
            getLocation()

          });
          map2.click(function(){
            getLocation()
          });

          //Vans saved
          $('#btnVans').click(function(){
            //Displaying company info on business screen
            var vansObj = {"image1":companies[0].image, "name1":companies[0].name, "city1":companies[0].city,"province1":companies[0].province, "website1":companies[0].website,
           "phone1":companies[0].phone,"latitude1":companies[0].latitude,"longitude1":companies[0].longitude};
           //parse json object into string
           var vanString = JSON.stringify(vansObj);
           //Set local Storage
           localStorage.setItem('vans',vanString);
           //Noftify user that the company they have selected has been stored in local storage
           alert("Vans has been saves to local storage");

           //Determining which button was clicked
           vansCmpny = true;
           appleCmpny = false;
           vice = false;
           vidyard = false;

           //Retrieving the correct key from storage
           var vansObjJson = localStorage.getItem('vans');
           //parsing array from local storage into json object
           var vansObj = JSON.parse(vansObjJson);

           //Displaying all the contents from the json object
           var displayVans = "<img src='" + vansObj.image1 + "'></img>" + "</br>" + vansObj.name1 + "</br>" + vansObj.city1 + "</br>" + vansObj.province1 +
           "</br>" + vansObj.website1 + "</br>" + vansObj.phone1;
           $('#displayInfo').html(displayVans);
          });

          //Apple saved
          $('#btnApple').click(function(){
            //Displaying company info on business screen
            var appleObj = {"image2":companies[1].image, "name2":companies[1].name, "city2":companies[1].city,"province2":companies[1].province, "website2":companies[1].website,
           "phone2":companies[1].phone,"latitude2":companies[1].latitude,"longitude2":companies[1].longitude};
           //parse json object into string
           var appleString = JSON.stringify(appleObj);
            //Set local Storage
           localStorage.setItem('apple',appleString);
           //Noftify user that the company they have selected has been stored in local storage
           alert("Apple has been saves to local storage");

            //Determining which button was clicked
           vansCmpny = false;
           appleCmpny = true;
           vice = false;
           vidyard = false;
            //Retrieving the correct key from storage
           var appleObjJson = localStorage.getItem('apple');
            //parsing array from local storage into json object
           var appleObj = JSON.parse(appleObjJson);

            //Displaying all the contents from the json object
           var displayApple = "<img src='" + appleObj.image2 + "'></img>" + "</br>" + appleObj.name2 + "</br>" + appleObj.city2 + "</br>" + appleObj.province2 +
           "</br>" + appleObj.website2 + "</br>" + appleObj.phone2;
           $('#displayInfo').html(displayApple);

          });

          //Vice saved
          $('#btnVice').click(function(){
              //Displaying company info on business screen
            var viceObj = {"image3":companies[2].image, "name3":companies[2].name, "city3":companies[2].city,"province3":companies[2].province, "website3":companies[2].website,
           "phone3":companies[2].phone,"latitude3":companies[2].latitude,"longitude3":companies[2].longitude};
           //parse json object into string
           var viceString = JSON.stringify(viceObj);
            //Set local Storage
           localStorage.setItem('vice',viceString);
           //Noftify user that the company they have selected has been stored in local storage
           alert("Vice has been saves to local storage");

             //Determining which button was clicked
           vansCmpny = false;
           appleCmpny = false;
           vice = true;
           vidyard = false;

            //Retrieving the correct key from storage
           var viceObjJson = localStorage.getItem('vice');
            //parsing array from local storage into json object
           var viceObj = JSON.parse(viceObjJson);

            //Displaying all the contents from the json object
           var displayVice = "<img src='" + viceObj.image3 + "'></img>" + "</br>" + viceObj.name3 + "</br>" + viceObj.city3 + "</br>" + viceObj.province3 +
           "</br>" + viceObj.website3 + "</br>" + viceObj.phone3;
           $('#displayInfo').html(displayVice);

          });

          //vidyard saved
          $('#btnVidyard').click(function(){
              //Displaying company info on business screen
            var vidyardObj = {"image4":companies[3].image, "name4":companies[3].name, "city4":companies[3].city,"province4":companies[3].province, "website4":companies[3].website,
           "phone4":companies[3].phone,"latitude4":companies[3].latitude,"longitude4":companies[3].longitude};
           //parse json object into string
           var vidyardString = JSON.stringify(vidyardObj);
            //Set local Storage
           localStorage.setItem('vidyard',vidyardString);
           //Noftify user that the company they have selected has been stored in local storage
           alert("Vidyard has been saves to local storage");

             //Determining which button was clicked
           vansCmpny = false;
           appleCmpny = false;
           vice = false;
           vidyard = true;


            //Retrieving the correct key from storage
           var vidyardObjJson = localStorage.getItem('vidyard');
            //parsing array from local storage into json object
           var vidyardObj = JSON.parse(vidyardObjJson);

            //Displaying all the contents from the json object
           var displayVidyard = "<img src='" + vidyardObj.image4 + "'></img>" + "</br>" + vidyardObj.name4 + "</br>" + vidyardObj.city4 + "</br>" + vidyardObj.province4 +
           "</br>" + vidyardObj.website4 + "</br>" + vidyardObj.phone4;
           $('#displayInfo').html(displayVidyard);

          });

    }
  });



});
//Getiing geolocation
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}

//displaying position
function showPosition(position) {
    var lat;
    var long;
    //Depending on which button was clicked
    //Initialize lat and long to the coordinates of the company chosen by the user
    if(vansCmpny == true){
      //Retrieve local stoage
      vansStorageObj = localStorage.getItem('vans');
      //Parse local storage into json object
      vansStorage = JSON.parse(vansStorageObj);
      //Initialize lat and long
      lat = vansStorage.latitude1;
      long = vansStorage.longitude1;
    }
    else if(appleCmpny == false){
      //Retrieve local stoage
      appleStorageObj = localStorage.getItem('apple');
      //Parse local storage into json object
      appleStorage = JSON.parse(appleStorageObj);
      //Initialize lat and long
      lat = appleStorage.latitude2;
      long = appleStorage.longitude2;
    }
    else if(vice == false){
      //Retrieve local stoage
      viceStorageObj = localStorage.getItem('vice');
      //Parse local storage into json object
      viceStorage = JSON.parse(viceStorageObj);
      //Initialize lat and long
      lat = viceStorage.latitude2;
      long = viceStorage.longitude2;
    }
    else if(vidyard == true){
      //Retrieve local stoage
      vidyardStorageObj = localStorage.getItem('vidyard');
      //Parse local storage into json object
      vidyardStorage = JSON.parse(vidyardStorageObj);
      //Initialize lat and long
      lat = vidyardStorage.latitude3;
      long = vidyardStorage.longitude3;
    }

    //Save correct coordinates to variable latlon
    var latlon = lat + "," + long;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    var map =" <img src='"+img_url+"'>";
    $('#map').html(map);
}
//displaying errors
function showError(error) {
  //If position is unavailable then display message to user
    if(error.POSITION_UNAVAILABLE){
        alert("It seems as if the map is unavailable");
        alert("Make sure you have selected a company from the business screen");
    }


}
