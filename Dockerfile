FROM node:18-alpine AS builder
WORKDIR /app

ARG API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL
RUN echo "📦 ENV VAR (build): $API_BASE_URL"

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN npm install -g pnpm

ARG API_BASE_URL
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL

ENV API_BASE_URL=$API_BASE_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXTAUTH_URL=$NEXTAUTH_URL

COPY --from=builder /app ./

EXPOSE 3000
CMD ["pnpm", "start"]
