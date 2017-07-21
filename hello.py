from flask import Flask, render_template, request, jsonify
from flask_cors import *
from getTable import getTable

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route('/get')
def tmp():
    return jsonify(getTable())

@app.route('/index.html')
def index():
    return "hello"


if __name__ == '__main__':
    app.run(debug='true')
