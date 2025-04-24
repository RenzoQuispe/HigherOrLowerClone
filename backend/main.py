from flask import Flask
from flask_cors import CORS
from routes.movies import movies_bp

app = Flask(__name__)
CORS(app, supports_credentials=True , origins=["http://localhost:5174"])  

app.register_blueprint(movies_bp,url_prefix='/movies')

@app.route('/')
def hello_world():
    return 'hello world'


if __name__ == '__main__':
    app.run(debug=True)
