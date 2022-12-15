import base64

from flask import request
from sqlalchemy import select, func
from sqlalchemy.orm import sessionmaker

from model import engine, user_table, User

Session = sessionmaker(bind=engine)

def select_from_table(query):
    with engine.connect() as connection:
        return connection.execute(query)


def find_user_by_login(login:str):
    result = select_from_table(select(user_table).where(user_table.c.email == login))
    return [_ for _ in result]


def create_user(email: str, name:str, password: str) -> User:
    user: User = User()
    user.email = email
    user.name = name
    user.password = password
    return user

def add_user(user: User):
    s = Session()
    s.bulk_save_objects([user])
    s.commit()
    with engine.connect() as connection:
        res = [n for n in connection.execute(user_table.select())]
        return res[-1][0]