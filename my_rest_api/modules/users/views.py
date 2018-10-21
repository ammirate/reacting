from flask import Blueprint, jsonify, request

from my_rest_api.modules.users.api import (
    create_user,
    read_user,
    update_user,
    delete_user,
    get_users,
)
from my_rest_api.modules.users.serializers import UserSerializer


bp_user = Blueprint('users', __name__, url_prefix='/api/users')


@bp_user.route('/', methods=['GET'])
def get_list():
    users = get_users()
    serialized = UserSerializer(users, many=True).data
    return jsonify(serialized)


@bp_user.route('/<int:user_id>', methods=['GET'])
def get(user_id):
    user = read_user(user_id)
    serialized = UserSerializer(user).data
    return jsonify(serialized)


@bp_user.route('/', methods=['POST'])
def create():
    user = create_user()
    serialized = UserSerializer(user).data
    return jsonify(serialized)


@bp_user.route('/<int:user_id>', methods=['POST'])
def update(user_id):
    model = request.data
    update_user(user_id, model)
    return jsonify(success=True, status=200)


@bp_user.route('/<int:user_id>', methods=['DELETE'])
def delete(user_id):
    delete_user(user_id)
    return jsonify(success=True, status=200)


