var TransitSystem = require( "./models" ).TransitSystem;


exports.get = function ( req, res ) {

    var filter = {};

    if ( typeof req.query.name !== "undefined" ) {
        filter.name = new RegExp( req.query.name, "i" );
    }

    var q = models.TransitSystem.find( filter ).sort( { name: 1 } );

    q.exec( function ( err, results ) {

        if ( err ) {
            return res.send( 500, { message: "Database error" } );
        }

        return res.send( 200, results );

    } );

};