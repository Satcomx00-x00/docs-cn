FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

RUN pnpm install --shamefully-hoist

COPY . .

RUN pnpm run build

EXPOSE 5173

CMD ["pnpm", "run", "dev"]