require('dotenv').config(); // Load environment variables

const express = require('express'); // Import express
const configViewEngine = require('./src/config/viewEngine');
const wedRoutes = require('./src/routes/wed');
const apiRoutes = require('./src/routes/api');
const connection = require('./src/config/database')


const app = express(); // Initialize the express app
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//config require.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configure view engine
configViewEngine(app);

// Define routes
app.use('/', wedRoutes);
app.use('/vs1/api', apiRoutes);


// Start the server


(async () => {
    // test connection
    try {
        await connection();
        console.log('PORT:', process.env.PORT);
        console.log('HOST_NAME:', process.env.HOST_NAME);

        app.listen(port, hostname, () => {
            console.log(`Server backend running at http://${hostname}:${port}/`);
        });

    } catch (error) {
        console.log('>>> connec to db faile')
    }
})()

