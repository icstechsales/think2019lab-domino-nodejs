---
title: Java!
permalink: /docs/ex5a/
---

Up to now we've been using DQL and the domino-db package in our node.js applications. This bonus section will show you how to use DQL in your Java agents as well.  This lab assumes that you are comfortable with using Domino Designer to create agents using Java.

NOTE: Java Agents are only able to use DQL starting with Domino v10.0.1 Fixpack 1.  If you are not using Fixpack 1 you'll get an error like this:

```
java.lang.UnsatisfiedLinkError: lotus/domino/local/Database.NcreateDQuery()J
       at lotus.domino.local.Database.createDominoQuery(Unknown Source)
       at JavaAgent.NotesMain(Unknown Source)
       at lotus.domino.AgentBase.runNotes(Unknown Source)
       at lotus.domino.NotesThread.run(Unknown Source)

```

Upgrade to Fixpack 1 to make this error go away!