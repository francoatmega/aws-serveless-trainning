FROM lambci/lambda:build-nodejs12.x

WORKDIR /src/

COPY package.json package-lock.json /src/

RUN npm ci --silent

COPY . .

EXPOSE 3000

CMD npm run start