/*function initMap() {
  var london = {lat:51.5074, lng 0.1278};
  var map = new google.maps.Map
    (document.getElementById('map'), {zoom:4, center:london});
  var marker = new google.maps.Marker({position: london, map: map});
}
*/

// Initialize and add the map

/*
function initMap() {
  // The location of Uluru

  var london = {lat: 51.508131, lng: -0.107552}
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: london, });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: london, map: map});
}
*/
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 14
      ,
        disableDefaultUI:true,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(51.495173, -0.100439), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#F6EFCF"
            }
        ]
    },
    {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#50514F"

      }
    ]
  },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E0E0E0" //background
            }
        ]
    },
    {
  "featureType": "administrative",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
    {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#E0E0E0" //administrative
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
   "featureType": "poi.medical",
   "elementType": "labels",
   "stylers": [
     {
       "visibility": "off"
     }
   ]
 },
    {
  "featureType": "poi.park",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "color": "#49C1AB" //park color
    }
  ]
},
{
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
{
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#E84DB4"
    }
  ]
},
{
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": [
    {
      "weight": 1
    }
  ]
},
{
  "featureType": "road",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#F2F2F2" //All others main road
    }
  ]
},
{
  "featureType": "road.arterial",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [
    {
      "color": "#F2F2F2"
    }
  ]
},

{
  "featureType": "road.highway",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [
    {
      "visibility": "off" //local roads
    }
  ]
},
{
  "featureType": "road.local",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
{
    "featureType": "road.local",
    "stylers": [
      {
        "weight": 0.2
      }
    ]
  },

  {
  "featureType": "transit",
  "elementType": "labels",
  "stylers": [
    {
      "visibility": "off"
    }
  ]
},
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {

                "visibility": "off"

            }
        ]
    },

    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#147FAD"
            }
        ]
    }
]
/**

  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#f5d872"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#d3c99c"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#1f271b"
      },
      {
        "lightness": 100
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1f271b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#1f271b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      },
      {
        "weight": 6.5
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#28afb0"
      },
      {
        "weight": 4.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "weight": 5.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#110235"
      }
    ]
  }
]
**/
 };

    var myLatLng = {lat: -25.363, lng: 131.044};


    var marker = new google.maps.Marker({
    position: myLatLng,

    map: map,
    title: 'Hello World!'
  });
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);


}
