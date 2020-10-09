FROM buildkite/puppeteer:latest
RUN mkdir app
WORKDIR app
COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY . .
