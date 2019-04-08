---
title: Step 1 - Your first app
permalink: /docs/ex1a/
---

The **domino-db** package is installed and you are ready to write your first node.js application.  

1. From the Desktop, double click on the `Think_6051` directory.

    ![](../images/ex1a/think-lab-directory.jpg)

1. From there, open the `exercises` directory, where you'll see the file called `exercise1.js`.  Right click on that file and choose **Open with -> Atom**.

    ![](../images/ex1a/open-with-atom.jpg)


    The file should open in the Atom editor.  Note the first few lines of the code:

    ![](../images/ex1a/code.jpg)


    These lines do three things:
    1. Require (import) the domino-db package.
    2. Define the server by host name and port.
    3. Identify the database to be used by directory and file name.
   

1. Starting on line 18 is the section which uses the `bulkReadDocuments` API call, passing a **query**.  That query is a Domino Query Language string which needs to be created in the application. You can see that string in line 14, commented out.  Uncomment that line and save the file, as shown below.

    ![](../images/ex1a/query-uncommented.jpg)


1. This query will return all documents which have the string `Contact` in the field named `Form`.  Let's test the application from the command prompt.  You should already have a command prompt open (if not, open one by clicking on its icon in the system tray and change to the `Desktop\Think_6051\exercises` directory).


1. Run the program by typing `node exercise1.js` and hitting Enter.  You should see results scroll across the screen, similar to the screen shot below:

    ![](../images/ex1a/results1.jpg)

The `documentRange` object contains useful information about the query: there are a total of 200 documents in the database matching the query (`total: 200`), and the call has returned 100 documents (`count: 100`), starting with the first document (`start: 0`).

Also notice that we have some information about each document. For each document, a domino-db request will return three values:

1. `@unid` - the unique ID of the document
2. `@created` - the date the document was created
3. `@modified` - the date the document was last modified

This is somewhat useful to us, but it might be more useful to also return the values in the various fields of the document. To do this, we modify the values we send in the `bulkReadDocuments` call.  We'll do that in the next exercise.
