# freeze.py
from app import app
from flask_frozen import Freezer

app.config['FREEZER_DESTINATION'] = 'docs'
app.config['FREEZER_RELATIVE_URLS'] = True

freezer = Freezer(app)

if __name__ == "__main__":
    freezer.freeze()


print("== ROUTES ==")
for r in app.url_map.iter_rules():
    if "GET" in r.methods:
        print(f"{r.rule}  ->  {r.endpoint}")
print("=============")



app.config['FREEZER_DESTINATION'] = 'docs'  # Output folder for GitHub Pages

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
