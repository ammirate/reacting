from flask import Blueprint, jsonify


bp = Blueprint('api', __name__, url_prefix='/api')


@bp.route('/', methods=['GET'])
def api():
    return jsonify(success=True, status_code=200)

