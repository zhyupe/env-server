FROM node:alpine

EXPOSE 80
COPY index.mjs /

ENTRYPOINT [ "node", "/index.mjs" ]
