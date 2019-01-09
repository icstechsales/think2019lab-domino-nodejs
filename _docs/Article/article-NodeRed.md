---
title: The Domino 10 Node-RED nodes
permalink: /docs/article-NodeRed/
---

Node-RED (https://nodered.org/), which crisply defines itself as "*Flow-based programming for the Internet of Things*" is the tool that
we have used to abstract the use of the standard APIs.<br />
Roughly, we encapsulated the access to the standard APIs as Node-RED nodes and we provided a simpler way to execute those APIs as part of a
"flow". Information about this new Node-RED package is available [here](https://flows.nodered.org/node/node-red-contrib-dominodb>). <br />

The **node-red-contrib-dominodb** Node-RED provides the following nodes:

![](../images/article/image2.png)

Each node implements all the code (and error management) to properly connect to a Domino Server and to a selected Domino database; you, as
the creator of the Node-RED flow, simply need to select the right instance of the **dominodb node** on which the node will act upon.

Most of the nodes encapsulate the use of more than one APIs, thus allowing you to select which functional operation to execute instead
than spending your time in understanding which API (and which parameters) to use.

The list of available nodes is shown under the **Domino 10** Category on the left palette of the Node-RED editor, as shown here:

![](../images/article/image3.png)

This simple set of nodes can be used to quickly and safely access to, virtually, all the APIs exposed by the "**domino-db NPM" component**. <br />
The **"domino-db NPM" component** is a pre-requisite for the Node-RED package and needs to be installed before the **node-red-contrib-dominodb** Node-RED package is downloaded (please refer to the *Installation section* of the package for details).

See the [Programming Guide](/docs/fullDoc-Intro/) on this site for detailed explanations of each available node. 
