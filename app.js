const express = require('express');
const app = express();

app.set("port", 3000);

const server = app.listen(app.get("port"), function(){
    console.log("Listening on port ",server.address().port);
});

app.use(express.urlencoded({extended : false}));
app.use(express.json({extended : false}));
app.use('/api', routes);