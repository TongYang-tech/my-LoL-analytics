FROM node:23.11-alpine3.20 AS build
WORKDIR /app
COPY . .
RUN npm run setup
RUN npm run build

FROM build AS prepare
COPY --from=build /app /app
RUN npm prune --production

FROM prepare AS runner
COPY --from=prepare /app /app
CMD ["npm", "run", "start"]
