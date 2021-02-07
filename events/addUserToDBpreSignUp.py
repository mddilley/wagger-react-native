import requests
import json
import os

insert_user = """mutation ($email: Text!) {
    insert_Users(objects: {email: $email}) {
        affected_rows
    }
}"""

ADMIN_SECRET = os.environ["ADMIN_SECRET"]
URL = os.environ.get("API_ENDPOINT")
HEADERS = {
    "Content-Type": "application/json",
    "X-Hasura-Admin-Secret": ADMIN_SECRET,
}


def lambda_handler(event, context):
    # Get user's email
    email = event["request"]["userAttributes"]["email"]

    # Add them to the DB
    try:
        r = requests.post(
            URL,
            json={"query": insert_user, "variables": {email: email}},
            headers=HEADERS,
        )
        r.raise_for_status()

        return {"statusCode": 200, "body": json.dumps({"message": "success"})}
    except requests.HTTPError as exception:
        print(exception)
