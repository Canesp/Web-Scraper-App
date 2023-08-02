import requests
from bs4 import BeautifulSoup


def GetWebElements(url):
    # retrives the website.
    resonse = requests.get(url)

    # parses the html.
    soup = BeautifulSoup(resonse.content, "html.parser")

    # gets all elements from the html.
    all_Elements = soup.find_all()

    # list of elements.
    element_list = []
    element_name_list = []

    # loops through all the elements.
    for element in all_Elements:

        # gets name, class and id of elements.
        element_name = element.name
        element_class = element.get("class")
        element_id = element.get("id")

        # checks if elements has any text if not skip.
        if element.string != None:

            # creates a option name to be used in dropdown based on "tag <class> <id>".
            element_option = (
                f"{element_name} "
                + f"{'<'+element_class[0]+'>' if element_class else ''}"
                + f"{'<'+element_id[0]+'>' if element_id else ''}"
            )

            # checks if the option name is in list of names and if not appends to lists.
            if element_option not in element_name_list:
                
                # appends to the two lists.
                element_name_list.append(element_option)
                element_list.append([element_option, element_class])
                
    
    # returns the list of elements to be used. 
    return element_list