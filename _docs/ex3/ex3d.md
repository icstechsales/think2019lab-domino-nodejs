---
title: Step 3 - Explain the query
permalink: /docs/ex3d/
---

1. The domino-db package has a function which lets you examine the query to see how Domino will process it.  Keep the query unchanged, but modify the function as follows; you are replacing the `bulkReadDocuments` function with the `explainQuery` function.

    ```JavaScript
    useServer(serverConfig).then(async server => {
      const db = await server.useDatabase(databaseConfig);
      const explain = await db.explainQuery({ query: query});
      console.log(explain);
    })
    .catch(err => {
      console.log('error:', err);
    });
    ```

1. Save the file and execute it by typing `node exercise3.js` on the command line and hitting Enter.  The results will look like this:

  <pre>
    Query Processed:
    [ Form = 'Person' and lastname = 'Aaron' or firstname = 'aaron' and @Created > @dt('2007-01-02') ]

    0. OR   	 (childct 1) (totals when complete:) Prep 0.0 msecs, Exec 363.36 msecs, ScannedDocs 0, Entries 0, FoundDocs 0
      1. AND   	 (childct 4) (totals when complete:) Prep 0.0 msecs, Exec 363.32 msecs, ScannedDocs 40656, Entries 0, FoundDocs 0
        2.Form = 'Person' NSF document search estimated cost = 100
          Prep 0.163 msecs, Exec 363.25 msecs, ScannedDocs 40656, Entries 0, FoundDocs 40000
        2.lastname = 'Aaron' NSF document search estimated cost = 100
          Prep 0.57 msecs, Exec 0.0 msecs, ScannedDocs 40000, Entries 0, FoundDocs 11
        2.firstname = 'aaron' NSF document search estimated cost = 100
          Prep 0.51 msecs, Exec 0.0 msecs, ScannedDocs 11, Entries 0, FoundDocs 0
        2.@Created > 2007-01-02T-1:-1:-1.-1Z NSF document search estimated cost = 100
          Prep 0.48 msecs, Exec 0.0 msecs, ScannedDocs 0, Entries 0, FoundDocs 0
  </pre>

   