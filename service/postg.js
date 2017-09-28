const pg = require('pg');

exports.gresHelper = (function(){
    // declare private variables and/or functions.


//jdbc:postgresql://34.197.159.40/boom
//user = boom
//pw = boomboom2
    console.log("I started.");
    var connString = "boom:boomboom2@postgresql://34.197.159.40/boom"
    var client;

    var getConn = function(){
        console.log(connString);
        client = new pg.Client(connString);
        client.connect();
        console.log("connected.")
        
    client.query('SELECT NOW() as now')
      .then(res => console.log(res.rows[0]))
      .catch(e => console.error(e.stack))
        
    }
    
    var getEventsFromDb = function(){
        var query = client.query("SELECT event_id,name FROM public.event");
        
        query.on('row', function(row){
            console.log(row);    
        });

        query.on('end', function(){
            client.end();    
        });

    }
    
    return{
        
    // declare public variables and/or functions.
    
    getConn: getConn,
    
    getEvents:getEventsFromDb,
    
    }

})();