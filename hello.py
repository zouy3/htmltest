from flask import Flask,render_template,request,jsonify
from flask_cors import *

app = Flask(__name__)
CORS(app, supports_credentials=True)
@app.route('/get')
def tmp():
	return jsonify({'word':'hi'})

@app.route('/index.html')
def index():
	return "hello"


if __name__ == '__main__':
	app.run(debug='true')