import requests

# function to check if a website real.
def WebAuthenticator(url):

    # try to call the website.
    try:
        # calls the website.
        response = requests.head(url)
        # returns true or false if the site response with 200.
        return response.status_code == 200
    
    # if error retruns False
    except:

        return False