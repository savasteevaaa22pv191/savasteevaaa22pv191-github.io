from database_api import select_from_table, create_cart, add_cart
from sqlalchemy import select, func

from model import cart_table, TeaData, tea_table


def get_teas_from_cart(user: str):
    print(type(cart_table.c.user_id))
    print(type(user))
    res = select_from_table(select(tea_table).join_from(cart_table, tea_table, cart_table.c.tea_id == tea_table.c.id)
                               .where(cart_table.c.user_id == user))
    temp = [_ for _ in res]
    result = []
    for t in temp:
        id, *other = t
        tea = TeaData(*other)
        td = tea.create_dict_from_task()
        td['id'] = id
        result.append(td)


    return [_ for _ in result]

def __add_to_cart__(tea_id: int, count: int, user_id: str):
    res = select_from_table(select(tea_table)
                            .where(tea_table.c.id == tea_id))
    if len([_ for _ in res]) != 1:
        return None

    cart = create_cart(tea_id, count, user_id)
    return add_cart(cart)
