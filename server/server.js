import app from './api/app.js';
const port = 9003;

app.listen(port, () => {
    console.log(`server running at ${port}.`)
})