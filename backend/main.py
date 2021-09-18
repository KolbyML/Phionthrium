# for windows phionthrium\Scripts\activate

from flask import Flask, request

app = Flask(__name__)

@app.route("/api/")
def main():
    user = request.args.get('user')
    return {"message": f"hello {user}"}


if __name__ == '__main__':
    app.run(debug=True)
