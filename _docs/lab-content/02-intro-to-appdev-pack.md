---
title: Intro to the AppDev Pack
permalink: /docs/02-intro-to-appdev-pack/
---

One of the important news happening with the Domino 10 launch is the possibility to use the NodeJS programming model to interact with the
Domino 10 runtime. <br />
As part of this evolution, our partner HCL has published the **App Dev Pack**, which contains:
-   **Proton**, the server-side component which allows a Domino 10 installation to support a new set of APIs
-   and the **domino-db** npm package, a node.js package which allows node.js developers to simply and easily create
    applications which make use of the features exposed by the App Dev Pack.

The APIs exposed by the **domino-db** component allow for **CRUD operations** on a given Domino database. Those APIs are described
in the README.md and Reference.md files included in the **domino-db** package. The APIs can
be divided into roughly three categories:
-   **APIs that work on sets of documents.**<br />
    -   Get a set of documents specified either by a DQL Query or by a list of unique Ids
    -   Replace a set of documents (or a set of items within the documents) specified either by a DQL Query or by a list of unique ids
    -   Delete a set of documents (or a set of items within the documents) specified either by a DQL Query or by a list of unique ids
    -   Create a set of documents
-   **APIs that work on a single document.** <br />
    Read, Replace, Delete or Create a document specified by its unique id
-   **Service APIs.** <br />
    These APIs allow you to connect to a Domino Server, to select a Domino database to work with, to get information about the connection that has been established.<br />
    An interesting Service API allows the programmer to **explain a DQL Query** before running it. It can become extremely useful when evaluating the optimal way to query a large Domino database.

The use of these APIs requires some familiarity with certain JavaScript programming features, such as promises, the new aync features of ES6, and error handling.