# StuVe Placeholder
**StuVe Placeholder** ist ein Platzhalter für Adressen, die derzeit nicht verfügbar sind, weil sie sich im Aufbau befinden oder aus anderen Gründen nicht erreichbar sind.

## NGINX
Die NGINX-Konfiguration muss so angepasst werden, dass die Anfragen an die entsprechenden Adressen weitergeleitet werden. Hierzu muss die Datei `/etc/nginx/sites-available/default` bearbeitet werden.

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
