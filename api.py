from imp import reload
from xmlrpc.client import _HostType
import uvicorn

if __name__ == '__main__':
    uvicorn.run('brem-svc:app', reload=True, host='0.0.0.0', port = 5000)