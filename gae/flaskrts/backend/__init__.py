from flask import Flask, send_file

app = Flask(__name__, static_url_path='')
app.config.from_pyfile('env/default.py')
# app.config.from_pyfile('env/%s.py' % app.config['ENV'])


@app.route('/api/')
def apiRoot():
    return {'ok': True}


@app.route('/teste/')
def teste():
    return str(app.config)


@app.route('/', defaults={'u_path': ''})
@app.route('/<path:u_path>')
def catch_all(u_path):
    print(repr(u_path))
    return send_file('../frontend/build/index.html')
