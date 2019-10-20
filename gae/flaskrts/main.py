from flask import Flask, send_file

app = Flask(__name__, static_url_path='')


@app.route('/api/')
def apiRoot():
    return ''

# @app.route('/<any>')
@app.route('/')
def reactApp():
    return send_file('frontend/build/index.html')


if __name__ == '__main__':
    app.run()
    # app.run(host='127.0.0.1', port=8080, debug=True)
