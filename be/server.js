const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(express.json());

app.use(express.static(path.join(__dirname, '../fe')));

app.post("/submit", (req, res) => {
    const { name, last_name, email, phone, message } = req.body;
    console.log("שם:", name);
    console.log("שם משפחה:", last_name);
    console.log("אימייל:", email);
    console.log("טלפון:", phone);
    console.log("הודעה:", message);

    res.json({ message: "הנתונים התקבלו בהצלחה" });
});

app.listen(port, () => {
    console.log(`השרת רץ: http://localhost:${port}`);
});
