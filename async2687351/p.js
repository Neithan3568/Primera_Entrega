const axios = require('axios')

const url='https://api-colombia.com/api/V1/NaturalArea'

//ejecutar asycrona con promesas
axios.get (url)
     .then((respuesta)=>{
        //console.log(respuesta.data)
        let naturalareas = respuesta.data
        naturalareas.forEach(naturalarea => {
                    console.log(naturalarea.name)
                    console.log('--------------')
                });
    })
    
     .catch((error)=>{
          console.log(error.code)
     })