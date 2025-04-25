function iniciarMap(){
    var coord = {lat:-33.4967865 ,lng: -70.6138003};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}