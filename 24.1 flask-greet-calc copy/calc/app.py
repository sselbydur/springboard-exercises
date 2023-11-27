# Put your app in here.
from flask import Flask, request

from operations import add, sub, mult, div

app = Flask(__name__)


@app.route("/add")
def addition():
    """Add parameters a + b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))

    return str(a + b)


@app.route("/sub")
def subtraction():
    """Subtract parameters a - b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))

    return str(a - b)


@app.route("/mult")
def multiplication():
    """multiply parameters a * b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))

    return str(a * b)


@app.route("/div")
def division():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))

    return str(a / b)
