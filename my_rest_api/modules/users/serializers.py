from marshmallow import Serializer, fields


class UserSerializer(Serializer):
    id = fields.Int()
    first_name = fields.String()
    last_name = fields.String()
    gender = fields.String()
    email = fields.Email()
    birth_date = fields.Date()
