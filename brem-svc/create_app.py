from contextlib import redirect_stderr
from os import path
from fastapi import FastAPI, staticfiles
from fastapi.responses import RedirectResponse

app = FastAPI()

site_path = path.join(path.dirname(__file__), 'react_build')
app.mount("/site", staticfiles.StaticFiles(directory=site_path, html=True),name='site')


@app.get('/')
def index():
    return RedirectResponse("/site")

@app.get('/api/hello')
def hello():
    return "Hello from Brem service"