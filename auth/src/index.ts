import express from 'express';
import { json } from 'body-parser';

// import the router
import { currentUserRouter } from './routes/current-user';

const app = express();
app.use(json());

// use the router
app.use(currentUserRouter);

app.listen(3000, () => {
    console.log("Auth Service - Listening at port 3000!!!");
});
