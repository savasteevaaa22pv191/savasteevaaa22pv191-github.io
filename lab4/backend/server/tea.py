from sqlalchemy import select, func

from database_api import select_from_table
from model import tea_table, TeaData


def get_teas():
    res = select_from_table(select(tea_table))
    temp = [_ for _ in res]
    result = []
    for t in temp:
        id, *other = t
        tea = TeaData(*other)
        td = tea.create_dict_from_task()
        td['id'] = id
        result.append(td)


    return [_ for _ in result]