from sqlalchemy import select, func

from database_api import select_from_table
from model import tea_table

def get_teas():
    result = select_from_table(select(tea_table))

    return [_ for _ in result]