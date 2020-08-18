// import axios
import axios from 'axios';

class Weather{
    // método estático
    static async getPrevisao(city) {
        // url hgbrasil
        // na requisao eu solicito dados especificos como temp, city_name,forecast(max,min),date
        const response = (await axios.get(`https://api.hgbrasil.com/weather?array_limit=2&fields=only_results,temp,city_name,forecast,max,min,date&key=ef757538&woeid=9807`)).data;
        return response;
    }
}

Weather.getPrevisao('Pelotas').then(v => {console.log(v)});
