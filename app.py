from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app)

# BBDD
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/agencia'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # none
db = SQLAlchemy(app)  # crea el objeto db de la clase SQLAlquemy
ma = Marshmallow(app)  # crea el objeto ma de de la clase Marshmallow


class Candidato(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    especialidad = db.Column(db.String(100))
    senority = db.Column(db.String(15))
    disponibilidad = db.Column(db.String(10))
    correo = db.Column(db.String(22))
    imagen = db.Column(db.String(400))

    def __init__(self, nombre, especialidad, senority, disponibilidad, correo, imagen):
        self.nombre = nombre
        self.especialidad = especialidad
        self.senority = senority
        self.disponibilidad = disponibilidad
        self.correo = correo
        self.imagen = imagen

# Resto de las tablas


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************


class CandidatoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'especialidad', 'senority',
                  'disponibilidad', 'correo','imagen')


# El objeto producto_schema es para traer un producto
candidato_schema = CandidatoSchema()
# El objeto productos_schema es para traer multiples registros de producto
candidatos_schema = CandidatoSchema(many=True)


@app.route('/candidatos', methods=['GET'])
def get_Candidatos():
    all_candidatos = Candidato.query.all()
    result = candidatos_schema.dump(all_candidatos)
    return jsonify(result)


@app.route('/candidatos/<id>', methods=['GET'])
def get_candidato(id):
    candidato = Candidato.query.get(id)
    # retorna el JSON de un candidato recibido como parametro
    return candidato_schema.jsonify(candidato)


@app.route('/candidatos/<id>', methods=['DELETE'])
def delete_candidato(id):
    candidato = Candidato.query.get(id)
    db.session.delete(candidato)
    db.session.commit()
    return candidato_schema.jsonify(candidato)


@app.route('/candidatos', methods=['POST'])  # Crear un registro
def create_candidato():
    nombre = request.json['nombre']
    especialidad = request.json['especialidad']
    senority = request.json['senority']
    disponibilidad = request.json['disponibilidad']
    correo = request.json['correo']
    imagen = request.json['imagen']
    nuevo_candidato = Candidato(nombre, especialidad, senority, disponibilidad, correo, imagen)
    db.session.add(nuevo_candidato)
    db.session.commit()
    return candidato_schema.jsonify(nuevo_candidato)


@app.route('/candidatos/<id>', methods=['PUT'])  # MODIFICAR
def update_candidato(id):
    candidato = Candidato.query.get(id)
    
    nombre = request.json['nombre']
    especialidad = request.json['especialidad']
    senority = request.json['senority']
    disponibilidad = request.json['disponibilidad']
    correo = request.json['correo']
    imagen = request.json['imagen']

    candidato.nombre = nombre
    candidato.especialidad = especialidad
    candidato.senority = senority
    candidato.disponibilidad = disponibilidad
    candidato.correo = correo
    candidato.imagen = imagen

    db.session.commit()
    return candidato_schema.jsonify(candidato)


# programa principal************************************
if __name__ == '__main__':
    app.run(debug=True, port=5000)
