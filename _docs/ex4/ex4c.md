---
title: Test with Postman
permalink: /docs/ex4c/
---

1. To invoke the agent, use the Postman application which is installed in the image.  Open Postman by double-clicking on its icon on the Desktop.

    ![](../images/ex4c/postman.jpg)

    Postman lets us invoke REST URLs, so we can use it to test our new agent.  Create a new Request if necessary, and paste in the following URL:

    ```
    http://dominoserver/dql/node-demo.nsf/exercise4
    ``` 

    Your page should look like this:

    ![](../images/ex4c/set-up-postman-call.jpg)

1. Hit Enter or click the blue **Send** button.  You should see the results returned as JSON.

    ![](../images/ex4c/results.jpg)


Congratulations! You've written a LotusScript agent which uses DQL.