from app import app
from os import environ

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=environ.get("SERVER_PORT"))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
