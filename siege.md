https://jason.pureconcepts.net/2011/09/installing-siege-mac-os-x-lion/


siege -c 250 -r 100 -b http://localhost:3000/healthcheck

siege -c250 -r 25 --content-type "application/json" 'http://localhost:3000/heroes POST {"name": "Zack"}'