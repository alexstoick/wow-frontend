FROM nginx
ADD index.html /usr/share/nginx/html
ADD dist /usr/share/nginx/html/dist

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

