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
Architectural style that defines a set of constraints to be used for creating web services.

---

**REST Principles**
- Uniform interface |
- Client–server |
- Stateless |
- Cacheable |
- Layered system |
- Code on demand (optional) |  

---

**Content Negotiation**  
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

The HTTP response headers are as follows:
- Access-Control-Allow-Origin: This is a required header in all valid CORS
responses. It either echoes the origin of the actual host that request has been
made from, if that is the only origin allowed to access the resource, or * if it
can be accessed from any host.
- Access-Control-Allow-Methods: This is a required header. It lists all the
allowed HTTP methods supported by the server providing the resource.

---

- Access-Control-Allow-Headers: This is a required header. If the request
contains Access-Control-Request-Headers, then it provides a commaseparated
list of all the headers accepted by the server providing the
resource.
- Access-Control-Allow-Credentials: This is an optional header used to
indicate that cookies should be included in the CORS request.
- Access-Control-Expose-Headers: This is an optional header. Its value is a
comma-separated list of headers that should be exposed to the client.
- Access-Control-Max-Age: This is an optional header that allows you to
cache the response for the value specified by it.

---

### RESTful Node.js API


---

### Deploying and running
### Node.js API
### on production


---

Thank you
