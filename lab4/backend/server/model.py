import sqlalchemy as sa
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