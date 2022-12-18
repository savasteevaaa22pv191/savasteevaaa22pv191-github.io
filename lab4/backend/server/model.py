import sqlalchemy as sa
from sqlalchemy import select
from sqlalchemy.ext.declarative import declarative_base
from os import environ



dsn = f"postgresql://{environ.get('POSTGRES_USER')}:{environ.get('POSTGRES_PASSWORD')}@{environ.get('DB_HOST')}:{environ.get('DB_PORT')}/{environ.get('POSTGRES_DB')}"

engine = sa.create_engine(dsn)
metadata = sa.MetaData()
Base = declarative_base()

class Tea(Base):
    __tablename__ = "tea"
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String(255))
    image = sa.Column(sa.String(255))
    rating = sa.Column(sa.Integer())
    number = sa.Column(sa.Integer())
    price = sa.Column(sa.Integer())
    description = sa.Column(sa.String(255))
    characteristic = sa.Column(sa.String(255))

tea_table = Tea.__table__

class TeaData:
    def __init__(self, name: str,  image: str, rating: int, number: int,
    price: int, description: str, characteristic: str):
        self.name: str = name
        self.image:  str = image
        self.rating: int = rating
        self.number: int = number
        self.price: int = price
        self.description: str = description
        self.characteristic: str = characteristic

    def create_dict_from_task(self):
        return {
            'name': self.name,
            'image': self.image,
            'rating': self.rating,
            'number': self.number,
            'price': self.price,
            'description': self.description,
            'characteristic': self.characteristic
        }

tea_list: list[TeaData]=[
    TeaData('Вишневый пунш', 'tovar1', 0, 0, 0, 'зеленый чай', 'зеленый чай'),
    TeaData('Летний цитрус', 'tovar2', 1, 5, 200, 'зеленый чай', 'зеленый чай'),
    TeaData('Секреты шаолиня', 'tovar3', 3, 10, 350, 'зеленый чай', 'зеленый чай')

]

class User(Base):
    __tablename__ = "users"
    id = sa.Column(sa.Integer, primary_key=True)
    email = sa.Column(sa.String(255))
    password = sa.Column(sa.String(255))
    name = sa.Column(sa.String(255))

user_table = User.__table__


class Cart(Base):
    __tablename__ = "cart"
    id = sa.Column(sa.Integer, primary_key=True)
    user_id = sa.Column(sa.Integer, sa.ForeignKey(user_table.c.id))
    tea_id = sa.Column(sa.Integer, sa.ForeignKey(tea_table.c.id))
    number = sa.Column(sa.Integer())

cart_table = Cart.__table__

Base.metadata.create_all(bind=engine, tables=[cart_table, tea_table, user_table])

def fill_teas():
    engine.execute(
        tea_table.insert(),
        [tea.create_dict_from_task() for tea in tea_list]
    )
with engine.connect() as connection:
    s = select(tea_table)
    result = connection.execute(s)
    items_number = len([row for row in result])
    if items_number != len(tea_list):
        fill_teas()
