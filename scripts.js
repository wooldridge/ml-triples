// After loading the sample documents with setup.js, you can run the
// following sample scripts in Query Console (http://localhost:8000/qconsole)

// Get all tweets containing a term, ordered by creation date

var term = "trust";
var results = cts.search(
  term, cts.indexOrder(cts.jsonPropertyReference("created"))
).toArray();

results.map(function(res) {
  return res.toObject().content;
});


// Get all followers of user

var sem = require("/MarkLogic/semantics.xqy");

var user = "http://example.org/users/b.json";

var results = sem.sparql(
  'SELECT ?follower \
   WHERE { \
     ?follower <http://example.org/follows> <' + user + '> \
   }'
).toArray();

results.map(function(res) {
  var follower = cts.doc(res.follower);
  return follower.toObject().name;
});


// Get all followers of the user who most recently tweeted a term

var sem = require("/MarkLogic/semantics.xqy");

var term = "computer";
var recent = cts.search(
  term, cts.indexOrder(cts.jsonPropertyReference("created"), "descending")
).toArray()[0];
var id = recent.toObject()['id'];

var results = sem.sparql(
  'SELECT ?follower \
   WHERE { \
     ?follower <http://example.org/follows> ?user . \
     ?user <http://example.org/tweeted> <' + id + '> \
   }'
);

results.map(function(res) {
  var follower = cts.doc(res.follower);
  return follower.toObject().name;
});
