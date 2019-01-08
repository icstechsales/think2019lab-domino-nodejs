---
title: Introducing NodeRed
permalink: /docs/fullDoc-IntroNodeRed/
---

Node-RED (https://nodered.org/), which crisply defines itself as
"*Flow-based programming for the Internet of Things*" is the tool that
we have used to abstract the use of the standard APIs.<br/>
Roughly, we encapsulated the access to the standard APIs as Node-RED
nodes and we provided a simpler way to execute those APIs as part of a
"flow".<br/>
Let's see the details.

### The Domino 10 Node-RED nodes

The **node-red-contrib-dominodb** Node-RED package
(https://flows.nodered.org/node/node-red-contrib-dominodb) provides the
following nodes:

![](../images/fullDocumentation/image2.png)

Each node, by selecting an instance of the **dominodb node** (see
[here](#the-configuration-node-dominodb)), implements all the code (and
error management) to properly connect to a Domino Server and to a
selected Domino database; you, as the creator of the flow, simply need
to select the right instance of the **dominodb node** on which to act
upon.

Most of the nodes encapsulate the use of more than one APIs, thus
allowing you to select which functional operation to execute instead
than spending your time in understanding which API (and which
parameters) to use.

The list of available nodes is shown under the **Domino 10 Category** on
the left palette of the Node-RED editor, as shown here:

![](../images/fullDocumentation/image3.png)
