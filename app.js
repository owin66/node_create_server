const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    console.log('Server request')
    console.log(req.url, req.method)

    /*res.setHeader('Content-Type','text/html')//метод может менять тип данных
    //text/plain; text/html

    res.write('<head><link rel="stylesheet" href="#"/></head>')//добавили стили

    res.write("<h1>Hello world</h1>") //метод для записи
    res.write("<p>My name is Dima</p>") //метод для записи*/
    res.setHeader('Content-Type','application/json')
    const data = JSON.stringify([
        {name: 'Tommy', age: 35},
        {name: 'Arthur', age: 45}
    ])

    res.end(data) //метод сообщает что все данные добавлены

});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});
