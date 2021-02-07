import requests
import json

insert_user = """mutation ($email: Text) {
  insert_Users(objects: {email: $email}) {
    affected_rows
  }
}"""

url = ''
r = requests.post(url, json={'query': insert_user, "variables": })