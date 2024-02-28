function routes(req, res, fs) {
    if (req.url === "/home") {
        const data = fs.readFileSync('./src/home.html');
        res.end(data);
    } else if (req.url === "/about") {
        const data = fs.readFileSync('./src/about.html')
        res.end(data);
    } else if (req.url === "/contact") {
        const data = fs.readFileSync('./src/contact.html')
        res.end(data);
    } else if (req.url === "/output" || req.url === "/home" || req.url === "/about") {
        const data = fs.readFileSync('./src/output.css')
        res.end(data);
    }
    else {
        res.end("Url -> /home, /contact, /about")
    }
}

module.exports = routes;