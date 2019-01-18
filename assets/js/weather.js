/* for production */
Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;
//---------------------//

var weather = new Vue({
    el: '#weather',

    // by default, the data is empty for zip, city name, etc.
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

        // when the submit button is pressed, it fires off this function

        getWeather: function(zipCode) {
            if (zipCode === '') {
                alert("That zip code is invalid!");
                return;
            }
            axios.get(`https://api.apixu.com/v1/current.json?key=[key]&q=${zipCode}`)
                .then((response) => { // upon success, receives the data from API
                    var txt = response.data; // now I begin filling in the empty props
                    this.cityName = txt.location.name; // here
                    this.stateName = txt.location.region; // here
                    this.currentTemp = txt.current.temp_f; // here
                    this.feelsLike = txt.current.feelslike_f; // here
                    this.weatherDescription = txt.current.condition.text; // here
                    this.weatherIcon = txt.current.condition.icon; // here
                    this.isShown = true; // and here (this will let the browser know to switch the CSS display from hidden)
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
