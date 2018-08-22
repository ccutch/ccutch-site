from flask import Flask
from flask import render_template as render


app = Flask(__name__)

@app.route('/')
def landing_page():
    return render('landing.html')
