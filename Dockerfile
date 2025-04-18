# 1단계: 빌더
FROM node:18-alpine AS builder
WORKDIR /app

ARG API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL
RUN echo "📦 ENV VAR (build): $API_BASE_URL"

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .
RUN pnpm build

# 2단계: 실행
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# ✅ pnpm 설치
RUN npm install -g pnpm

# ✅ 런타임에 필요한 환경변수 주입
ARG API_BASE_URL
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL

ENV API_BASE_URL=$API_BASE_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXTAUTH_URL=$NEXTUAUTH_URL

# ✅ 애플리케이션 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]