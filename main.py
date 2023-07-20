import eel
from WebAuthenticator import WebAuthenticator as webAuth
from WebElements import GetWebElements as getElemenets

eel.init("web")

@eel.expose
def webAuthenticator(url):
    result = webAuth(url)
    return result

@eel.expose
def getWebElements(url):
    result = getElemenets(url)
    return result


eel.start("index.html")