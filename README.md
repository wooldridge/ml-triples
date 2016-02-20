## ml-triples

Example scripts for querying triple-enhanced JSON data in MarkLogic. RDF triples allow you to describe 
relationships between documents.

### Usage

Run `setup.js` in Query Console (http://localhost:8000/qconsole) to load data into a MarkLogic database. 
Make sure the database has a range element index set on the `created` property.

Then run the scripts in `scripts.js` on that database from Query Console. 

### JSON Data

Sample user with a triple describing who the user follows:

```
{
  "id": "http://example.org/users/a.json",
  "name": "Aaron",
  "created": "2010-01-01T00:00:00",
  "triple": {
    "subject": "http://example.org/users/a.json",
    "predicate": "http://example.org/follows",
    "object": "http://example.org/users/b.json"
  }
}
```

Sample tweet with a triple describing the author:
```
{
  "id": "http://example.org/tweets/1.json",
  "content": "Never trust a computer you can't throw out a window.",
  "created": "2013-01-01T08:00:00",
  "triple": {
    "subject": "http://example.org/users/a.json",
    "predicate": "http://example.org/tweeted",
    "object": "http://example.org/tweets/1.json"
  }
}
```


