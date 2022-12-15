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
  import urllib
  output = []
  for rule in app.url_map.iter_rules():

    options = {}
    for arg in rule.arguments:
      options[arg] = "[{0}]".format(arg)

    methods = ','.join(rule.methods)
    url = url_for(rule.endpoint, **options)
    line = urllib.parse.unquote("{:50s} {:20s} {}".format(rule.endpoint, methods, url))
    output.append(line)

  for line in sorted(output):
    print(line)
  return json.jsonify(get_teas())

@app.route("/test")
@jwt_required()
def test():
  return current_identity


@app.route("/authorization", methods= ['GET'])
def authorization():
  return json.jsonify(__authorization__())

@app.route("/registration", methods= ['POST'])
def registration():
  res= __registration__()
  if res is None:
    return Response(response="FU", status=401)
  response = json.jsonify(res)
  response.status=201
  return response