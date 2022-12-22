# Feedback

## [Your Neo4j Sandbox](https://graphacademy.neo4j.com/courses/app-nodejs/0-setup/2-sandbox/)

wrong link:
NEO4J_URI - defines the connection string, more about that in Connection Strings & Authentication

Used
`<a href="../1-driver/2-connection-strings/">Connection Strings &amp; Authentication</a>`

But should have been (`../` missing):
`<a href="../../1-driver/2-connection-strings/">Connection Strings &amp; Authentication</a>`

---

difference between Neo4j cluster or a single DBMS not explained

---

not mentioned in what file the changes shall be made (neo4j.js)

---

hardcoded localhost mentioned instead of `process.env.NEO4J_USERNAME` etc
Not explained that localhost is just an example. As a reader I would assume that example code works. Otherwise it should be explained or linked how to install neo4j locally.

---

`verifyConnectivity` deprecated. instead `getServerInfo`. Also console.logging result not mentioned.

myDriver.verifyConnectivity()
myDriver.getServerInfo()

---

changed @type {neo4j.Driver}
to @type {typeof neo4j.Driver}

---

https://graphacademy.neo4j.com/courses/app-nodejs/2-interacting/3-type-system/

Why is this line uncommented?
```
// import { int, isInt } from 'neo4j-driver'
```