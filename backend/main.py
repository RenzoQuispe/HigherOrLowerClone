from flask import Flask
from flask_cors import CORS
from routes.movies import movies_bp

app = Flask(__name__)
CORS(app, supports_credentials=True , origins=["*"])  

app.register_blueprint(movies_bp,url_prefix='/movies')

@app.route('/')
def flask():
    return 'Server backend funcionando :D'

if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True)
