const covids_locations = [
   //  {
   //      name:"רמי לוי", 
   //      location : {lat: 31.951716, lng: 34.901323 },
   //      address: "חיל התותחנים 5, לוד",
   //      datetime : [ {"key":"1","date": "27/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"3","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"4","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"5","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"6","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"7","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"55","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"354","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"r2345","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"3t32","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"22h50","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"39h8","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"29y854","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"337b45","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"24n7","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"33m45","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"21kt2","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"3sg98","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"28gsi58","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"37k47","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"24ks7","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"32jaj97","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"2346aja58","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"33th57","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"22hth72","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"324ht670","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"2126u34","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"387u65u64","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"234634584","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"367q23","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"8rqr5","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"74gdh56","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"9483","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"8363","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   // {"key":"938w7","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   // {"key":"5325","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"23469","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"383j737","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"238372","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"3848","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"22436","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"64563","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"48372","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"43763","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"5046782","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"72673","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"658462","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"383793","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"48942","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"79393","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"94792","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"4973","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"493672","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"049383","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"3832","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"286583","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"26822","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"286523","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"342","date": "26/01/2021", "time_start": "19:00", "time_end": "20:00"},
   //                   {"key":"253","date": "28/01/2021", "time_start": "16:00", "time_end": "17:00"},
   //                   {"key":"14","date": "29/01/2021", "time_start": "19:00", "time_end": "20:00"}]
   //   },

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
        name:"סופר1 פארם מרכז העיר", 
        key: 1,
        location : {lat: 31.952056, lng:   34.906369 },
        address: "התאנה 8, לוד",
        datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
                     {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
     },

     {
        name:"סופר פארם מרכז העיר", 
        key:2,
        location : {lat: 32.086172,  lng:   34.818859},
        address: "התאנה 8, לוד",
        datetime : [ {"key":"1","date": "24/01/2021", "time_start": "16:30", "time_end": "17:00"},
                     {"key":"2","date": "23/01/2021", "time_start": "19:50", "time_end": "20:00"}]
     }
]

export default covids_locations;