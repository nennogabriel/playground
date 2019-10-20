from flask import Flask, send_file

app = Flask(__name__, static_url_path='')


@app.route('/api/')
def apiRoot():
    return {'ok': True}


@app.route('/:any')
@app.route('/')
def reactApp():
    return send_file('../frontend/build/index.html')
