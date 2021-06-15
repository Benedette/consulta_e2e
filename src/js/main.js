
const e2e = document.querySelector("#e2e")


const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

e2e.addEventListener("blur",(e)=>{
    let search = e2e.value

    fetch(`https://${search}`)

    .then(response =>{ response.json()
        .then( data => window.alert(JSON.stringify(data)))
    })
    .catch(e => console.log('Deu Erro: '+ e.message))
})
