console.log("Andrul")

const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


//root route
// return html
// app.get('/', (req, res) => {
//     res.send("<h1>Hello Andrul Gaming</h1>")
// })

// middleware
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//return object
app.get('/', (req, res) => {
    res.json(
        {
            name: "Andrul",
            age: 20,
        }
    )
})


//about route
app.post('/about', (req, res) => {
    res.send(req.body)
})
app.get('/host', (req, res) => {
    // res.send(req.hostname)
    // res.send(req.ip)
    // res.send(req.ips)
    // res.send(req.method)
    // res.send(req.originalUrl)
    // res.send(req.path)
    // res.send(req.protocol)
    // res.send(req.secure)
    res.send(req.route)
})

//users route
app.get('/users', (req, res) => {
    if(req.accepts('html')){
        res.send('<h1>Hello Andrul</h1>')
    }else if(req.accepts('json')){
        res.json({name: "Andrul"})
    }else if(req.accepts('xml')){
        res.send('<name>Andrul</name>')
    }
    else{
        res.send('Unsupported format')
    }
})


app.get('/header', (req, res) => {
    // res.send(req.headers);
    res.send(req.get("Host"));
})




// app.get('/users', (req, res) => {
//     res.render('users');
// })

// app.get('/download', (req, res) => {
//     res.download('./files/Resume_143kb.pdf', 'Andrul_Resume.pdf');
// })

// app.get('/showfile', (req, res) => {
//     res.sendFile(__dirname + '/files/Resume_143kb.pdf');
// })

// app.get('/error', (req, res) => {
//     res.sendStatus(404);
// })

// json data
// app.get('/', (req, res) => {
//     res.json(
//         {
//             name: "Andrul",
//             age: 20,
//         }
//     )
// })


// about route
// app.get('/about', (req, res) => {
//     res.send("<h1>About Page</h1>")
// })

//Users route
// app.get('/users/:id', (req, res) => {
//     res.send(req.params)
// })

// app.get('/users/:userid/level/:levelid', (req, res) => {
//     res.send(req.params)
// })
// app.get('/users/:userid/level/:levelid', (req, res) => {
//     res.send(req.params.userid)
// })

//using query parameters
//http://localhost:3000/search?name=andrul&age=20

//in console
// app.get('/search', (req, res) => {
//     res.send(req.query)
// })

//in browser
// app.get('/search', (req, res) => {
//     const name = req.query.name
//     const age = req.query.age
//     res.send(`Name: ${name}, Age: ${age}`)
// })
