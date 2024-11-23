FROM node:18-alpine

# Combine RUN commands to reduce layers and set PNPM_HOME
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git && \
    npm install -g pnpm

WORKDIR /app

# Copy only package files first to leverage cache
COPY package.json pnpm-lock.yaml* ./

# Combine install commands and clean up cache
RUN pnpm install --shamefully-hoist && \
    pnpm install vitepress-plugin-mermaid mermaid vitepress-plugin-google-analytics vitepress-plugin-group-icons -D && \
    pnpm store prune && \
    rm -rf /root/.npm/* /root/.pnpm-store/* /root/.node-gyp/*

# Copy source after installing dependencies
COPY . .

# Build the application
RUN pnpm run build

# Use non-root user for better security
USER node

EXPOSE 5173

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:5173 || exit 1

CMD ["pnpm", "run", "serve"]