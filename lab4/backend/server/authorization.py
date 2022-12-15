import base64

from flask import request

from database_api import find_user_by_login, create_user, add_user


def get_user_from_auth():
    user_data = request.headers.get('Authorization')
    if user_data:
        user_data = user_data.replace('Basic ', '', 1)
        try:
            user_data = base64.b64decode(user_data).decode('ASCII')
            pivot = user_data.find(':')
            username = user_data[:pivot]
            password = user_data[pivot + 1:]
            return username, password
        except TypeError:
            pass

    return None



def __check_unique_user__(login:str):
    result = find_user_by_login(login)
    print(result)
    if len(result) > 0:
        return False
    return True


def check_user(login, password):
    
    result = find_user_by_login(login)
    if len(result) != 1:
        return None
    result = result[0]
    if result[2] != password:
        return None
    return result

def identity(payload):

    user_id = payload['identity']
    print(payload)

    return "PIDOR"
"""
def __authorization__():
    result = select_from_table(select(tea_table))

    return [_ for _ in result]

"""


def __registration__():
    login, password = get_user_from_auth()
    args = request.args
    if __check_unique_user__(login):
        print(login, password)
        user = create_user(login, args.get('name'), password)
        print(user)
        add_user(user)
        return True
    else:
        return None

