---
title: Step 1 - Create the query without precedence
permalink: /docs/ex3b/
---

This step will create a query one step at a time, showing how precedence can affect the results.

1. Modify the query as follows:

    ```JavaScript
    const query = " Form = 'Person' and lastname = 'Aaron' or firstname = 'aaron' ";
    ```

    This query should return documents where the Form contains the string "Person" and the EITHER the `LastName` OR the `FirstName` field contains the string "Aaron".

1. Change the API to call the `bulkReadDocuments` function:

    ```JavaScript
    const docs = await db.bulkReadDocuments({
      query: query,
      itemNames: [
        'firstname',
        'lastname'
      ]
    });
    ```
    
1. Save the file and run it from the command line with `node exercise3.js`. You should have a result set of 131 documents (by default the function will return the first 100 documents).

    ![](../images/ex3/results1.jpg)