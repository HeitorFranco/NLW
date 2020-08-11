function pageHome(req, res){
    return res.render("index.html")
}
function pageCreatePoint(req, res){
    return res.render("create-point.html")
}
function pageSearchResults(req, res){
    return res.render("search-results.html")
}

module.exports = { pageHome, pageCreatePoint, pageSearchResults }