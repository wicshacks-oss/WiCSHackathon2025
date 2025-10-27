# WiCS Hackathon — Starter Website

This is a minimal Flask-based starter website for a hackathon. It includes pages for:

- Home (hero, project stacks with hover-expand, sponsors scroller, attendee stats)
- FAQ
- Schedule
- Location (embedded map)
- Sponsors (scrollable list)
- Developers (resources)

Quick start (macOS, zsh):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Then open http://127.0.0.1:5000 in your browser.

Files added:
- `app.py` — Flask app and an example `/attendees` JSON endpoint
- `templates/` — Jinja2 templates
- `static/css/style.css` — custom styles
- `static/js/main.js` — front-end JS to fetch attendee data and render Chart.js
