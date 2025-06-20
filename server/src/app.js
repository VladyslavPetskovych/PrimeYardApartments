const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get(
    "/",
    (req, res, next) => {
        return res.json("Hello World!")
    }
)

app.use((err, req, res, next) => {
    const status = err.status || 500;

    return res.status(status).json({
        message: err.message,
        status: err.status,
    });
});

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`Server has started on PORT ${PORT}`)
})