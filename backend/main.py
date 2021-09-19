# for windows phionthrium\Scripts\activate
from flask import Flask, request, Response
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

MASTER_KEY = "TESTING.7#%"

# dumby info
content = [
{
    "uid": "1",
    "name": "LLVM",
    "description": "The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. Despite its name, LLVM has little to do with traditional virtual machines. The name \"LLVM\" itself is not an acronym; it is the full name of the project.",
    "img": None,
}, {
    "uid": "2",
    "name": "phionthrium",
    "description": "Phionthrium allows you to fund your favorite open source projects through a series of unimplemented Ethereum smart contracts. As a creator, after signing up you can redeem your funds monthly as curious consumers pledge their hard-earned Ethereum, the Robux of the future.",
    "img": None,
}, {
    "uid": "3",
    "name": "bottom penguin coin",
    "description": "A new crypto currency for us penguins 🐧 because why not 🥺👉👈. Read the white papers here: https://github.com/Zeyu-Li/bottom-penguin/blob/main/white-paper.pdf ",
    "img": None,
},
]

@app.route("/api/")
def main():
    # user is window.ethereum public key
    user = request.args.get('user')
    return {"message": f"hello {user}"}

@app.route("/api/browse/")
def browse():
    return Response(json.dumps(content),  mimetype='application/json')

@app.route("/api/entry/")
def getEntry():
    getNum = request.args.get('entry')
    entry = 0
    try:
        entry = int(getNum)
        if not (0<entry<=len(content)):
            raise Exception("not valid entry")
        
    except:
        return {"error": f"entry not found"}

    return Response(json.dumps(content[entry-1]),  mimetype='application/json')

@app.route("/api/entry/add/", methods = ['POST', 'GET'])
def addEntry():
    try: 
        json_item = request.get_json() 
        user = json_item["user"]
        name = json_item["name"]
        description = json_item["description"]
        img=None
        if ('img' in json_item.keys()):
            img = json_item['img']

        if user and name and description and len(user) and len(name) and len(description):
            content.append({
                "uid": str(len(content)),
                "name": name,
                "description": description,
                "img": img,
            })
            return {"message": "entry was added"}

    except Exception as err:
        return {"error": f"entry was not added {err}"}

@app.route("/api/entry/remove/", methods = ['DELETE', 'GET'])
def removeEntry():
    try:
        json_item = request.get_json() 
        uid = json_item['uid']
        keys = json_item['keys']

        uid = int(uid)
        if uid and keys and 0 < uid <= len(content) and keys == MASTER_KEY:
            del content[uid-1]
            return {"message": "entry was deleted"}

    except:
        return {"error": f"entry was not deleted"}

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return {"error": "500"}


if __name__ == '__main__':
    app.run(debug=True)
