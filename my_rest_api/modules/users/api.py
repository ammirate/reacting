import requests
from dateutil.parser import parse

from my_rest_api import db
from my_rest_api.modules.users.models import User


RANDOM_USER_URL = 'https://randomuser.me/api/'


def _create_user_from_json(json_model):
    user = User(
        first_name=json_model['name']['first'],
        last_name=json_model['name']['last'],
        gender=json_model['gender'],
        email=json_model['email'],
        birth_date=parse(json_model['dob']['date']).date(),
    )
    return user


def create_user():
    json_model = requests.get(RANDOM_USER_URL).json()['results'][0]
    user = _create_user_from_json(json_model)
    db.session.add(user)
    db.session.commit()
    return user


def read_user(user_id):
    return db.session.query(User).get(user_id)


def update_user(user_id, json_model):
    data = dict(
        first_name=json_model['name']['first'],
        last_name=json_model['name']['last'],
        gender=json_model['gender'],
        email=json_model['email'],
        birth_date=parse(json_model['dob']['date']).date(),
    )
    db.session.query(User).filter_by(id=user_id).update(data)
    db.session.commit()


def delete_user(user_id):
    return db.session.query(User).filter_by(id=user_id).delete()


def get_users():
    return db.session.query(User).all()
