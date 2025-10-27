from flask import Flask, render_template, jsonify

app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/faq')
def faq():
    return render_template('faq.html')



@app.route('/schedule')
def schedule():
    return render_template('schedule.html')


@app.route('/location')
def location():
    return render_template('location.html')


@app.route('/sponsors')
def sponsors():
    return render_template('sponsors.html')


@app.route('/developers')
def developers():
    return render_template('developers.html')


@app.route('/attendees')
def attendees():
    # Example data for frontend charts. Replace with real data as needed.
    data = {
        'total': 240,
        'demographics': {
            'students': 120,
            'professionals': 90,
            'others': 30
        },
        'ageGroups': {
            '18-22': 100,
            '23-30': 90,
            '31-40': 30,
            '40+': 20
        }
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
