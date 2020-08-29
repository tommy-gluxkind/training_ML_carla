import requests


def display_ip():
    """
    Use https://get.geojs.io/v1/ip.json and get ip key value use https://get.geojs.io/v1/ip/geo/ + ip to get my location
    precondition: none
    postcondition: return
    :return: a dictionary with two keys:latitude and longitude
    """
    requests_ip = requests.get('https://get.geojs.io/v1/ip.json')
    ip = requests_ip.json()['ip']
    geo_request = requests.get('https://get.geojs.io/v1/ip/geo/' + ip + '.json')
    geo_data = geo_request.json()
    return {'latitude': geo_data['latitude'], 'longitude': geo_data['longitude']}


def main():
    """
    Test the module
    """
    print(display_ip()['latitude'])


if __name__ == '__main__':
    main()
