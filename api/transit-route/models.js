var mongoose = require( "mongoose" );

var Schema = mongoose.Schema;


var TransitRouteSchema = Schema( {
    system: String,
    id: String,
    name: String,
    type: String,
    directions: [ String ]
} );

exports.TransitRoute = mongoose.model( "transit_routes", TransitRouteSchema );
