from flask import Flask

app = Flask(__name__)


@app.route("/welcome")
def welcome_msg():
    return f"Welcome to the page"


@app.route("/welcome/<descr>")
def cordial_msg(descr):
    return f"Welcome {descr}"
