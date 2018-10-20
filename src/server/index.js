const express = require('express');
const path = require('path');

const app = express();

// Server static content for public and node_modules folder
const publicPath = path.resolve(__dirname, '../../public');
app.use(express.static(publicPath));
const nodePath = path.resolve(__dirname, '../../node_modules');
app.use('/modules', express.static(nodePath));

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

// Start server
const server = app.listen(8088, () => {
    const host = server.address().address;
    const { port } = server.address();

    console.log('Server is now listening at %s:%s', host, port);
});
