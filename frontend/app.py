from flask import Flask, render_template

# Create a Flask application
app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route('/')
def home_page():
    return render_template("index.html")

@app.route('/form_page')
def form_page():
    return render_template("form.html")


if __name__ == '__main__':
    
    app.run(debug=True)
    

