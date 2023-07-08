import requests 

# function for validating urls.
def validate_URL(url):

    # try to get a response from the website.
    try:
        # gets website.
        response = requests.head(url)
        # retruns true if is a real website else false.
        return response.status_code == 200
    except:

        # if a error occurs retruns false. 
        return False
    
