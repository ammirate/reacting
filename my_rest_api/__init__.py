from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from views import bp


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/database.db'
db = SQLAlchemy(app)


from my_rest_api.modules.users.views import bp_user


app.register_blueprint(bp)
app.register_blueprint(bp_user)


@app.route('/', methods=['GET'])
def home():
    return 'my_rest_api app'
