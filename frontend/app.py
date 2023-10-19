from flask import Flask, render_template, request, jsonify

def get_response():
    return "got response"
# Create a Flask application
app = Flask(__name__, static_folder="static", template_folder="templates")

# @app.post("/predict")
# def predict():
#     text = request.get_json().get("message")
#     # TODO: check if text is valid
#     response: get_response(text)
#     message = {"answer": response}
#     return jsonify(message)

if __name__ == '__main__':
    
    app.run(debug=True)
    

