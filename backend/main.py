# for windows phionthrium\Scripts\activate

from flask import Flask

app = Flask(__name__)

@app.route("/")
def main():
    return "<p>Hello, World!</p>"


if __name__ == '__main__':
    app.run(debug=True)
