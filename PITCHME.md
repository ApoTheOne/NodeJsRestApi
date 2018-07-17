### RESTful API   
#### in
### Node.js

---
**TOPICS**
1.	GitHub  
2.	REST?  
3.	Creating RESTful Node.js API  
4.	Running Node.js APIs on production  

---

### GitHub
 - OSS
 - GitHub pages
 - Gists
 
---

### Representational state transfer  
**Architectural style that defines a set of constraints to be used for creating web services**  
- Representational State Transfer refers to transferring "representations". You are using a "representation" of a resource to transfer resource state which lives on the server into application state on the client.
---
- Every object has some state(data) and behaviour(methods).In order to transfer state of object on server at particular instance of time to client, some sort of representation is needed like JSON or xml or any other format.  
So REST is about creating representation of object's current state and transferring that representation over network.  
[Source](https://stackoverflow.com/questions/10418105/what-does-representational-state-mean-in-rest)  

---

### REST Principles  
**Uniform interface**  
Individual resources are identified by logical URIs. The resources (database) are themselves different from the representation (XML, JSON, HTML) sent to the client. The client can manipulate the resource through the representations provided they have the permissions. Each message sent between the client and the server is self-descriptive and includes enough information to describe how it is to be processed. The hypermedia that is hyperlinks and hypertext act as the engine for state transfer.

---

**Client–server**  
The clients and the server are separated from each other thus the client is not concerned with the data storage thus the portability of the client code is improved while on the server side the server is not concerned with the client interference thus the server is simpler and easy to scale.

---

**Stateless**  
None of the clients context is to be stored on the server side between the request. All of the information necessary to service the request is contained in the URL, query parameters, body or headers.  
[p]
---

**Cacheable**  
Clients can cache the responses. The responses must define themselves as cacheable or not to
prevent the client from sending the inappropriate data in response to further requests.
- Use HTTP Headers for caching the response for specified amount of time (if required*)
- Cache-Control header
- Use __max-age__ attribute to set cache expiry time  
[p] [c]
---

**Layered system**  
At any time client cannot tell if it is connected to the end server or to an intermediate. The  intermediate layer helps to enforce the security policies and improve the system scalability by enabling load-balancing.

---

- **Code on demand** (optional)  
An optional constraint where the server temporarily extends the functionality of a client by the transfer of executable code.

[Source](https://www.servage.net/blog/2013/04/08/rest-principles-explained/)  
---

**Content Negotiation**  

- In Node.js, HTTP response object contains a method **response.format()** which performs the content negotiation based on the **Accept** HTTP headers if set in the request object.  
- It uses built in **Request.accepts()** to select appropriate handler for the request.  
- If that is not found, the server invokes default handler, which resonds with HTTP 406 Not acceptable.  

---
Code Sample:
```
app.get('/users', function(request, response) {
 response.format( {
  'text/xml' : function() {
     response.send(users.getUserInXML());
    },
  'application/json' : function() {
     JSON.stringify(users.getUserInJson());
    },
  'default' : function() {
     response.status(406).send('Not Acceptable');
    }
});
```

---

HTTP Request Headers: 
- Accept
 - MIME Types
- Accept-Language
- Accept-Encoding
```
GET /users/anurag
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate, br
Accept-Language: en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7
```
---

Response Header  
```
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
```

---

**Cross Origin Resource Sharing**  
 The HTTP request headers are as follows:
- Origin: This defines where the actual request originates from  
- Access-Control-Request-Method: This defines the method that should be
used for the actual request  
- Access-Control-Request Header: This defines the headers that should be
used in the actual request   
---

Valid CORS HTTP response headers start with Access-Control-Allow:  
- Access-Control-Allow-Origin* : This is a required header in all valid CORS
responses. It either echoes the origin of the actual host that request has been
made from, if that is the only origin allowed to access the resource, or * if it
can be accessed from any host.  
- Access-Control-Allow-Methods* : This is a required header. It lists all the
allowed HTTP methods supported by the server providing the resource.  
required headers*
---

- Access-Control-Allow-Headers*: This is a required header. If the request
contains Access-Control-Request-Headers, then it provides a comma separated
list of all the headers accepted by the server providing the
resource.  
- Access-Control-Allow-Credentials: This is an optional header used to
indicate that cookies should be included in the CORS request.  
required headers*
---

- Access-Control-Expose-Headers: This is an optional header. Its value is a
comma-separated list of headers that should be exposed to the client.
- Access-Control-Max-Age: This is an optional header that allows you to
cache the response for the value specified by it.

---
[Sample code](https://github.com/ApoTheOne/PPOC/blob/master/NodeJsApi/app.js)
```
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
        next();
});
```

---

**API Versioning**  
Original URI:  
https://www.apiendpoint/users  

After releasing a new version of this API:-  
We can have following URLs for backward compatibility:  
https://www.apiendpoint/version1/users  
or  
https://www.apiendpoint/users?version=1  
---
We redirect request (301 Moved Permanently HTTP status) for   
https://www.apiendpoint/users  
to  
https://www.apiendpoint/version2/users  
or  
htps://www.apiendpoint/users?version=2
---

### RESTful Node.js API

Try it out!

---

### Deploying and running
### Node.js API
### on production
An optional constraint where the server temporarily extends the functionality of a client by the transfer of executable code.

---

Thank you
