
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

    fetch(`https://api.mercadopago.com/pos/${search}?access_token=APP_USR-3703711902928676-012817-ad98593253d083aca15cdd0680a9a52f-519628608`)

    .then(response =>{ response.json()
        .then( data => window.alert(JSON.stringify(data)))
    })
    .catch(e => console.log('Deu Erro: '+ e.message))
})
