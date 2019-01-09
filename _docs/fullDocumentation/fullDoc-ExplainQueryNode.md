---
title: Explain Query Node
permalink: /docs/fullDoc-ExplainQueryNode/
---

A node that **explains** a **Domino Query Language** [query](https://www-01.ibm.com/support/docview.wss?uid=ibm10729047). <br/>
The node implements the `explainQuery API`.

### Selecting the Domino Server and Database
You can select the instance of your Domino Database using the 
<i style="color:red">Database selector</i>:<br/>
![](../images/fullDocumentation/image63.png)<br/>

This provides access to the library of **dominodb configurations**.

##Explaining the Query

The node only accepts one input, the **DQL Query** to be explained:

![](../images/fullDocumentation/image64.png)

In the picture above, the DQL Query to be explained is represented by
the string `'nodejs'.status = 'pending'`.
-   The <i style="color:red">DQL Query input</i> can be left empty in the editor. You can use the `msg.DDB_query` input attribute to provide the information at runtime.

### Output

![](../images/fullDocumentation/image65.png)

The `msg.DDB_queryExplained` contains the output of the relevant API.
