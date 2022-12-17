from flask import Flask, url_for
from flask_cors import CORS
import flask.json as json
from flask import Response
from flask_jwt import JWT, jwt_required, current_identity
from authorization import __registration__, check_user, identity
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

@app.route("/add-to-card", methods=['POST'])
@jwt_required()
def test():
  return Response(response="OK", status=200)


@app.route("/registration", methods= ['POST'])
def registration():
  res= __registration__()
  if res is None:
    return Response(response="can't do registration", status=401)
  response = json.jsonify(res)
  response.status=201
  return response