const covids_locations = [
    // {
    //     name:"רמי לוי", 
    //     location : {lat: 31.951716, lng: 34.901323 },
    //     address: "חיל התותחנים 5, לוד",
    //     datetime : [ {"key":"1","date": "27/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
    //                  {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
    //                  {"key":"14","date": "29/01/2021", "time_start": "19:00", "time_end": "20:00"}]
    //  },

    //  {
    //     name:"סופר פארם מרכז העיר", 
    //     location : {lat: 31.954256, lng:  34.900797 },
    //     address: "התאנה 8, לוד",
    //     datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
    //                  {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
    //  }
    //  ,

    //  {
    //     name:"סתם", 
    //     location : {lat: 32.054256, lng:  34.900797 },
    //     address: "התאנה 8, לוד",
    //     datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
    //                  {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
    //  }
    //  ,

    //  {
    //     name:"סתם2", 
    //     location : {lat: 31.754256, lng:  34.900797 },
    //     address: "התאנה 8, לוד",
    //     datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
    //                  {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
    //  }
    //  ,

    //  {
    //     name:"סופר פארם מרכז העיר", 
    //     location : {lat: 31.754256, lng:  35.100797 },
    //     address: "התאנה 8, לוד",
    //     datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
    //                  {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
    //  }
    //  ,

    //  {
    //     name:"סופר פארם מרכז העיר", 
    //     location : {lat: 32.954256, lng:  33.900797 },
    //     address: "התאנה 8, לוד",
    //     datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
    //                  {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
    //  },

     {
        name:"סופר פארם מרכז העיר", 
        location : {lat: 31.952056, lng:   34.906369 },
        address: "התאנה 8, לוד",
        datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
                     {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
     },
     
     {
        name:"סופר פארם מרכז העיר", 
        location : {lat: 32.086172,  lng:   34.818859},
        address: "התאנה 8, לוד",
        datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
                     {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
     }
]

export default covids_locations;