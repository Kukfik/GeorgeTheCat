from flask import Flask, render_template

# Create a Flask application
app = Flask(__name__)

# Define a route and a view function
@app.route('/')
def hello_world():
    return render_template("test.html")

if __name__ == '__main__':
    app.run(debug=True)