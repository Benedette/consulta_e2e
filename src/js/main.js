
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
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://api.mercadopago.com/pos/${search}?access_token=APP_USR-3703711902928676-012817-ad98593253d083aca15cdd0680a9a52f-519628608`,{headers: {'Access-Control-Allow-Origin':'https://api.mercadopago.com/'}}, options)
    .then(response =>{ response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu Erro: '+ e,message))
})
