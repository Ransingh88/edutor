const express = require('express');
const cors = require('cors');
require('dotenv').config()

const authRoutes = require('./routes/auth1')
const app = express();
const PORT = process.env.PORT || 5000

const bodyParser = require('body-parser');
const routes = require('./routes/auth3');
// const handle = require('./handlers');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded());
const server = require("http").createServer(app);
const connect = require("./configs/db")
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', routes);
// app.use('/api/polls', routes.poll);

// app.use((req, res, next) => {
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
// app.use(handle.error);



app.use(require('./controllers/user.controller'))
app.get("/video", (req, res) => {
    res.send("Server is running.")
});
io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    })

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    })
    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
    })

})


app.use('/authe', authRoutes)

app.listen(PORT, async () => {
    await connect();
    console.log(`listening on port ${PORT}...`)
})