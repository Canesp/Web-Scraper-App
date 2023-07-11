import eel
from WebAuthenticator import WebAuthenticator as webAuth

eel.init("web")

@eel.expose
def webAuthenticator(url):
    result = webAuth(url)
    return result


eel.start("index.html")