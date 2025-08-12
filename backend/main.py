from flask import Flask
from flask_cors import CORS
from routes.movies import movies_bp

import os
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True , origins=["*"])  

app.register_blueprint(movies_bp,url_prefix='/movies')

@app.route('/')
def flask():
    return 'Server backend funcionando :D'

if __name__ == '__main__':
    port = int(os.getenv("SERVER_PORT", 5000))
    print(f"Server ejecutándose en el puerto {port}")
    app.run(host="0.0.0.0", port=port, debug=True)
