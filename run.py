from my_rest_api import app

from my_rest_api import db
db.create_all()

app.run(debug=True)
