// Run this script in Query Console (http://localhost:8000/qconsole) to
// load sample documents in to a database. Also add an element range
// index for the "created" property

declareUpdate();

var path = '/twitter';

var data = {
  users: ['a', 'b', 'c'],
  tweets: [1, 2, 3, 4]
}

for (key in data) {
  for (i in data[key]) {
    xdmp.documentLoad(
      path + '/' + key + '/' + data[key][i] + '.json',
      {uri: 'http://example.org/' + key + '/' + data[key][i] + '.json'}
    );
  }
}
