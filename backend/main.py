# for windows phionthrium\Scripts\activate
from flask import Flask, request, Response
import json

app = Flask(__name__)

@app.route("/api/")
def main():
    # user is window.ethereum public key
    user = request.args.get('user')
    return {"message": f"hello {user}"}

@app.route("/api/browse/")
def browse():
    # dumby info
    content = [
    {
        "name": "LLVM",
        "description": "The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. Despite its name, LLVM has little to do with traditional virtual machines. The name \"LLVM\" itself is not an acronym; it is the full name of the project.",
        "img": None,
    }, {
        "name": "phionthrium",
        "description": "this.self",
        "img": None,
    }, {
        "name": "bottom penguin coin",
        "description": "A new crypto currency for us penguins 🐧 because why not 🥺👉👈. Read the white papers here: https://github.com/Zeyu-Li/bottom-penguin/blob/main/white-paper.pdf ",
        "img": None,
    },
    ]
    return Response(json.dumps(content),  mimetype='application/json')

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return {"error": "500"}


if __name__ == '__main__':
    app.run(debug=True)
