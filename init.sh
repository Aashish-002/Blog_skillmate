cp .env.prod .env
npx prisma generate
npm run build
pm2 start server
