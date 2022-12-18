from flask import Flask, url_for, request
from flask_cors import CORS
import flask.json as json
from flask import Response
from flask_jwt import JWT, jwt_required, current_identity
from authorization import __registration__, check_user, identity
from cart import get_teas_from_cart, __add_to_cart__
from tea import get_teas

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'super-secret'

jwt = JWT(app, check_user, identity)


@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route("/teas")
def teas():
  return json.jsonify(get_teas())

@app.route("/cart")
@jwt_required()
def cart():
  print("current identity", current_identity)
  return json.jsonify(get_teas_from_cart(str(current_identity)))


@app.route("/cart", methods=['POST'])
@jwt_required()
def add_to_cart():
  data = request.get_json()
  print("count tea", data.get("count_tea"))
  result = __add_to_cart__(data.get("id_tea"), data.get("count_tea"), str(current_identity))

  if result is None:
    return Response(response="Товар не добавлен", status=400)

  return Response(response="OK", status=200)


@app.route("/registration", methods= ['POST'])
def registration():
  res= __registration__()
  if res is None:
    return Response(response="can't do registration", status=401)
  response = json.jsonify(res)
  response.status=201
  return response