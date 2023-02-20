import axios from 'axios'


let sheetURL = 'https://script.google.com/macros/s/AKfycbzCPhJw0cnAqrox3CbSaAw5ETKFYgbtXo8wYLukLt0Dz-2c64ld_icUTMFBcsxjEOcy/exec'


const saveData = async (data, url=sheetURL) => {
    try{
        let res = await axios.post(url, (data))
        console.log(res.data)

    } catch(err){
        console.log(err)
    }
}


export default saveData