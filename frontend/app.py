from flask import Flask, render_template

# Create a Flask application
app = Flask(__name__, static_folder="static", template_folder="templates")

# Define a route and a view function
@app.route('/')
def hello_world():
    return render_template("index.html")

# Define a route and a view function
@app.route('/forms')
def forms_page():
    return render_template("form.html")


if __name__ == '__main__':
    
    app.run(debug=True)
    

