import requests
import json
import os

insert_user = """mutation ($email: Text) {
    insert_Users(objects: {email: $email}) {
        affected_rows
    }
    }"""

url = os.environ.get("API_ENDPOINT")

def lambda_handler(event, context):
    # Get user's email
    email = event['request']['userAttributes']['email']

    # Add them to the DB
    try:
        r = requests.post(url, json={'query': insert_user, "variables": { email: email } })
        r.raise_for_status()
    except requests.HTTPError as exception:
        print(exception)
