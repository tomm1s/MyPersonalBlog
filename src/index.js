const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection=require("./mongodb")
const templatePath = path.join(__dirname,'../templates')

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/contacts.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacts.html'));
});
app.get('/lifestyle.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'lifestyle.html'));
});
app.get('/myblog.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'myblog.html'));
});
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
});
app.get('/image.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'image.jpg'));
});
app.get('/tiktok.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tiktok.png'));
});
app.get('/twitch.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'twitch.png'));
});
app.get('/youtube.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'youtube.jpg'));
});
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'script.js'));
});
app.get('/videofile.mp4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'videofile.mp4'));
});

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
s
const data={
    name:req.body.name,
    password:req.body.password
}

await collection.insertMany([data])

res.render("home")

})

app.post('/login', async (req, res) => {

    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password ===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
})

app.listen(3000,()=> {
    console.log("port connected");
})