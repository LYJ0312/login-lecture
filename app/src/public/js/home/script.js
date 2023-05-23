    let weather = {
        "apiKey" : "1fda49137cf8610c15adebeca912d465",
        fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&usits=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => {
            this.displayWeather(data);
            weadet = [data.list[0].weather[0].description, data.list[0].main.temp-273.15];
            Cloth_change();
        });
        }, //api에서 정보를 가져온 후 사용 할 수 있게 data로 넘김
        displayWeather : function (data) {
        const name = data.city.name;
        const { icon, description } = data.list[7].weather[0];
        const { temp, humidity } = data.list[7].main;
        const { speed } = data.list[7].wind;
        //다음날 6시
    
        const { icon: icon1, description: description1 } = data.list[9].weather[0];
        const { temp: temp1, humidity: humidity1 } = data.list[9].main;
        const { speed: speed1 } = data.list[9].wind;
    //다음날 정오
    
        const { icon: icon2, description: description2 } = data.list[12].weather[0];
        const { temp: temp2, humidity: humidity2 } = data.list[12].main;
        const { speed: speed2 } = data.list[12].wind;
    //다음날 9시
    
    
        console.log(name,description,icon,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp - 273) + "℃";
        document.querySelector(".humidity").innerText = "습도: " + humidity + "%";
        document.querySelector(".wind").innerText = "풍속: " + speed + "km/h";
        const weatherIconImg = document.querySelector('.icon');
        if (weatherIconImg) {
            const weatherIconAdrs = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            weatherIconImg.setAttribute('src', weatherIconAdrs);
        } else {
            console.error('.icon class element is not found');
        }
    
        console.log(name,description1,icon1,temp1,humidity1,speed1);
        document.querySelector(".description1").innerText = description1;
        document.querySelector(".temp1").innerText = Math.round(temp1 - 273) + "℃";
        document.querySelector(".humidity1").innerText = "습도: " + humidity1 + "%";
        document.querySelector(".wind1").innerText = "풍속: " + speed1 + "km/h";
        const weatherIconImg1 = document.querySelector('.icon1');
        if (weatherIconImg1) {
            const weatherIconAdrs1 = `http://openweathermap.org/img/wn/${icon1}@2x.png`;
            weatherIconImg1.setAttribute('src', weatherIconAdrs1);
        } else {
            console.error('.icon1 class element is not found');
        }
    
        console.log(name,description2,icon2,temp2,humidity2,speed2);
        document.querySelector(".description2").innerText = description2;
        document.querySelector(".temp2").innerText = Math.round(temp2 - 273) + "℃";
        document.querySelector(".humidity2").innerText = "습도: " + humidity2 + "%";
        document.querySelector(".wind2").innerText = "풍속: " + speed2 + "km/h";
        const weatherIconImg2 = document.querySelector('.icon2');
        if (weatherIconImg1) {
            const weatherIconAdrs2 = `http://openweathermap.org/img/wn/${icon2}@2x.png`;
            weatherIconImg2.setAttribute('src', weatherIconAdrs2);
        } else {
            console.error('.icon2 class element is not found');
        }
        
        document.querySelector(".weather").classList.remove("loading");
        }, //데이터를 어떻게 표기할 지
        search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
        } ,// 검색창에 검색한 도시이름이 fetchWeather에 들어갈 수 있도록
        searchseoul: function() {
        this.fetchWeather("seoul");
        } ,
        
        searchincheon: function() {
        this.fetchWeather("incheon");
        } ,
        searchbusan: function() {
        this.fetchWeather("busan");
        } ,
        searchGyeonggi: function() {
        this.fetchWeather("Gyeonggi-do");
        } 
    };
    document.querySelector(".search button").addEventListener("click", function() {
        weather.search();
    });
    document.querySelector(".search-bar").addEventListener("keyup",function(event) {
        if (event.key == "Enter") {
        weather.search()
        }});
    document.getElementById("seoul").onclick=function(){
        weather.searchseoul();
    };
    
    document.getElementById("incheon").onclick=function(){
        weather.searchincheon();
    };
    document.getElementById("busan").onclick=function(){
        weather.searchbusan();
    };
    document.getElementById("Gyeonggi").onclick=function(){
        weather.searchGyeonggi();
    };