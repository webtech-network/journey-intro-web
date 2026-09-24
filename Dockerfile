# Imagem pequena (Alpine)
FROM node:20-alpine

# Instala o json-server (global) de forma simples
RUN npm i -g json-server@0.17.4

# Diretórios internos onde os volumes serão montados
# /data -> db.json
# /site -> frontend estático
RUN mkdir -p /data /site

# Declara os volumes (para documentação e ferramentas)
VOLUME ["/data", "/site"]

# Porta padrão do JSON Server
EXPOSE 5000

# Sobe o JSON Server:
# - watch: acompanha mudanças no db.json
# - static: serve os arquivos do frontend
# - 0.0.0.0: acessível fora do container
CMD ["sh", "-lc", "json-server --watch /data/db.json --static /site --host 0.0.0.0 --port 5000"]
