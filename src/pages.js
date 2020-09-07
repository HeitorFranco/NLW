const point = require("./database/create-point-db")

function pageHome(req, res){
    return res.render("index.html")
}
function pageCreatePoint(req, res){
    return res.render("create-point.html")
}
function pageSearchResults(req, res){
    if(!req.query.search){
        point.findAll().then((cards) => {
            const itens = ["Lâmpadas", "Pilhas e Baterias", "Papéis e Papelão", "Resíduos Eletrônicos", "Resíduos Orgânicos", "Óleo de Cozinha"]
            for(let card of cards){
                card.itensdecoleta = String(card.itensdecoleta).split(",")
                novoArray = []
                card.itensdecoleta.forEach((element, index) => {
                    novoArray.push(itens[element-1]) 
                    if(index+1 != card.itensdecoleta.length) {novoArray[index]+=", "}
                });
                card.itensdecoleta = novoArray
                console.log(card.itensdecoleta)
            }
            return res.render("search-results.html", {cards})
        }).catch((error) => console.log(error))
    }else{
        point.findAll({where: {cidade: req.query.search}}).then((cards) => {
            const itens = ["Lâmpadas", "Pilhas e Baterias", "Papéis e Papelão", "Resíduos Eletrônicos", "Resíduos Orgânicos", "Óleo de Cozinha"]
            for(let card of cards){
                card.itensdecoleta = String(card.itensdecoleta).split(",")
                novoArray = []
                card.itensdecoleta.forEach((element, index) => {
                    novoArray.push(itens[element-1]) 
                    if(index+1 != card.itensdecoleta.length) {novoArray[index]+=", "}
                });
                card.itensdecoleta = novoArray
                console.log(card.itensdecoleta)
            }
            res.render("search-results.html", {cards})
        }).catch((error) => console.log(error))
    }
}

function pageRegisterPoint(req, res) {
    const body = req.body
    point.create({
        nome: body.name,
        endereço: body.address,
        numero: body.address2,
        estado:  body.state,
        cidade: body.city,
        foto: body.picture,
        itensdecoleta: body.items
    })
    return res.redirect("/")
}


module.exports = { pageHome, pageCreatePoint, pageSearchResults, pageRegisterPoint }