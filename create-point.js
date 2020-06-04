// selecionar os estados
// e então as cidades do form

function ufs() {
    const ufselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")

    .then( res => res.json() )
    .then( states => {

        for( state of states ) {
            ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
       
    } )
}

ufs()

function getcities(event) {
    const cityselect = document.querySelector("select[name=city]")

    const stateinput = document.querySelector("input[name=state]")
    
    const ufvalue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex 
    stateinput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

    cityselect.innerHTML = "<option value>Selecione a Cidade</option>"
    cityselect.disabled = true

        fetch(url)
        .then( res => res.json() )
        .then( cities => {
            

        for( const city of cities ) {
            cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        cityselect.disabled = false

    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities)


    // itens de coleta
    const itemsToCollect = document.querySelectorAll(".itens-grid li")
    
    for (const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event) {
        console.log("fhyoiba")
        const itemLi = event.target

        //adicionar ou remover uma class com js
        itemLi.classList.toggle("selected")
        

        const itemId = eventLi.dataset.id

        

        //verificar se existem itens selecionados
        //se sim, pegar os itens selecionados

        const alreadySelected = selectedItems.findIndex( item => {
            const itemFound = item == itemId //isso será true ou false
            return itemFound
        })

        //se já estiver selecionado,
        if(alreadySelected >= 0) {
            //tirar da seleçõa
            const filteredItems = selectedItems.filter( item => {
                const itemsIsDifferent = item != itemId  //false
                return itemsIsDifferent
            })
        } 
    }
