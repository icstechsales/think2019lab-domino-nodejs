---
title: Error Handling
permalink: /docs/fullDoc-ErrorHandling/
---


If the processing fails or if mandatory inputs are missing, a **node-red-contrib-dominodb** node terminates in error. <br/>
The error object is the **incoming msg object** with the additional `msg.DDB_fatal` attribute representing the reason for the
error. 

You can use a Node-RED **Catch Node** to catch the error.<br/>
![](../images/fullDocumentation/image66.png)
