FROM nginx
ADD index.html /usr/share/nginx/html
ADD dist /usr/share/nginx/html/dist

CMD ["nginx", "-g", "daemon off;"]

