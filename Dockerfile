# 1단계: 종속성 설치 및 Next.js 앱 빌드
FROM node:18-alpine AS builder

# 작업 디렉토리 생성
WORKDIR /app

# 종속성 설치
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# 앱 소스 복사 및 빌드
COPY . .
RUN pnpm build

# 2단계: 경량화된 이미지로 빌드 결과물 실행
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# 빌드 산출물만 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Next.js 앱 실행
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]