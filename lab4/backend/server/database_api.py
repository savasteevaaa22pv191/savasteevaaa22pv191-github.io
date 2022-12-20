import base64

from flask import request
from sqlalchemy import select, func
from sqlalchemy.orm import sessionmaker

from model import engine, user_table, User, Cart

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

def create_cart(tea_id: int, count :int, user_id: str) -> Cart:
    cart: Cart = Cart()
    cart.tea_id = tea_id
    cart.user_id = user_id
    cart.number = count
    return cart

def add_user(user: User):
    s = Session()
    s.bulk_save_objects([user])
    s.commit()
    with engine.connect() as connection:
        res = [n for n in connection.execute(user_table.select())]
        return res[-1][0]

def add_cart(cart: Cart):
    s = Session()
    s.bulk_save_objects([cart])
    s.commit()
    with engine.connect() as connection:
        res = [n for n in connection.execute(user_table.select())]
        return res[-1][0]