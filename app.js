const http = require('http')

const PORT = 3000

const server = http.createServer((req,res)=>{
    console.log('Server request')
    console.log(req.url,req.method)

    res.setHeader('Content-Type','text/plain')

    res.write('Hello world') //метод для записи
    res.end() //метод сообщает что все данные добавлены

});

server.listen(PORT,'localhost',(error)=>{
    error ? console.log(error) : console.log(`listening port ${PORT}`)
});
