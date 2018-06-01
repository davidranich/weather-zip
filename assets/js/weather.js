/* for production */
Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
//---------------------//

var weather = new Vue({
    el: '#weather',
    data: {
        displayName: "Weather Zip",
        zipCode: '',
        isShown: false,
        hiddenClass: 'hidden',
        shownClass: 'show',
        cityName: '',
        stateName: '',
        currentTemp: '',
        feelsLike: '',
        weatherDescription: '',
        weatherIcon: ''
    },
    methods: {
        getWeather: function(zipCode) {
            if (zipCode === '') {
                alert("That zip code is invalid!");
                return;
            }
            axios.get(`https://api.apixu.com/v1/current.json?key=[key]&q=${zipCode}`)
                .then((response) => {
                    var txt = response.data;
                    this.cityName = txt.location.name;
                    this.stateName = txt.location.region;
                    this.currentTemp = txt.current.temp_f;
                    this.feelsLike = txt.current.feelslike_f;
                    this.weatherDescription = txt.current.condition.text;
                    this.weatherIcon = txt.current.condition.icon;
                    this.isShown = true;
            }).catch(error => { alert("That zip code is invalid!"); });
        }
    },
    filters: {
        round: function(value) {
            if (!value) {
                return '';
            }
            return Math.floor(value);
        }
    }
});