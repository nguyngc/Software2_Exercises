import requests

lat = 60
lon = 21
def open_weather_key():
    return "xxx"

def open_weather_map(city):
    req = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={open_weather_key()}"
    #req = f"https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}"
    response = requests.get(req)
    return response.status_code, requests.get(req).json()

def temp_in_celcius(kelvin):
    return kelvin - 273.15

city = input("Enter city name: ")

try:
    (result, data) = open_weather_map(city)
    if result == 200:
        #print(json.dumps(data, indent=2))
        print(f"The current weather of {city}: {data['weather'][0]['description']}")
        print(f"Temperature: {temp_in_celcius(data['main']['temp']):.1f} C")
    elif result == 401:
        print("Not valid API key")
    elif result == 404:
        print(f"No weather information for {city}")
    else:
        print(f"Error: {str(result)}")
except requests.exceptions.RequestException as e:
    print(f"Request could not be completed", e)