# for windows phionthrium\Scripts\activate

from flask import Flask, request

app = Flask(__name__)

@app.route("/api/")
def main():
    # user is window.ethereum public key
    user = request.args.get('user')
    return {"message": f"hello {user}"}

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return {"error": "500"}


if __name__ == '__main__':
    app.run(debug=True)
