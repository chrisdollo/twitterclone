# Flask is the web framework, jsonify converts dicts to JSON
from flask import Flask, jsonify
# CORS allows the React frontend (on a different port) to talk to this server
from flask_cors import CORS

app = Flask(__name__)

# allow all origins to make requests to this server
CORS(app)

# sanity check — confirms the server is running
@app.route("/")
def home():
    return "Server is running"

# health check route
@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})

# friend feed route will go here
# GET /api/feed/<user_id>

# only start the server if this file is run directly, not when imported
if __name__ == "__main__":
    app.run(debug=True, port=8000)
