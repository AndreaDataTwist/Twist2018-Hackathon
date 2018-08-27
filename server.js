const SparqlClient = require('sparql-client-2');

function sendSparkQuery() {
// Get the leaderName(s) of the 10 cities
  var query = "SELECT * FROM <http://dbpedia.org> WHERE { ?city <http://dbpedia.org/property/leaderName> ?leaderName } LIMIT 10";
  var client = new SparqlClient( 'http://dbpedia.org/sparql')
    .register({db: 'http://dbpedia.org/resource/'});
  
  client.query(query)
    //.bind('city', {db: 'Dekwaneh'})
    .execute(function(error, results) {
      console.dir(arguments, {depth: null});
  });
}

const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'));
app.use('/orgprofile', express.static(__dirname + '/public'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))