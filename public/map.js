/**
 * SVG path for target icon
 */
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";


/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
"theme": "dark",

  "projection": "winkel3",
  "dataProvider": {
    "map": "worldLow",

    
    "images": [ {
      "svgPath": targetSVG,
      "label": "New Delhi, India",
      "latitude": 28.7041,
      "longitude": 77.1025
    }, 
      
      ]
  },

  "areasSettings": {
    "unlistedAreasColor": "#fff"
  },

  "imagesSettings": {
    "color": "#fff",
    "rollOverColor": "red",
    "selectedColor": "#fff",
    "animationDuration": 4,
    "adjustAnimationSpeed": true
  },

 
  "export": {
    "enabled": true
  }

} );