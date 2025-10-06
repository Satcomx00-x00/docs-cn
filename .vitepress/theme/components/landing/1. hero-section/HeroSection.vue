<script setup lang="ts">
import HeroDiagram from './HeroDiagram.vue'
</script>

<template>
  <div class="hero">
    <div class="container">
<<<<<<< HEAD
      <!-- ViteConf Replay Button -->
      <a href="https://devsecforge.io/Infrastructure/Docker/Docker" class="hero__pill" target="_blank">
        <img src="/icons/android-chrome-192x192.png" alt="" width="20" height="20" />
        <span>📖 Explore Documentation</span>
      </a>

      <!-- Heading -->
      <h1>DevSecOps<br /><span class="gradient-text">Documentation</span><br />Learn. Build. Secure.</h1>
      <!-- Tagline -->
      <h3>
        🔐 Cybersecurity, CI/CD, and infrastructure guides<br />
        <span class="highlight">Resources for developers and security pros</span> 📚
=======
      <!-- ViteConf 2025 Button -->
      <a
        href="https://viteconf.org/?utm=vite"
        class="hero__pill"
        target="_blank"
      >
        <img
          src="../../../../../images/viteconf.svg"
          alt="Viteconf logo"
          width="20"
          height="20"
        />
        <span>ViteConf 2025</span>
      </a>

      <!-- Heading -->
      <h1>卓越的 Web 开发<br />构建工具</h1>
      <!-- Tagline -->
      <h3>
        Vite 是一个超快的前端构建工具 <br> 赋能下一代 Web 应用的发展
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
      </h3>

      <!-- Technology Badges -->
      <div class="tech-badges">
        <div class="badge-item">
          <img class="badge-icon" src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/docker.svg" alt="Docker" />
          <span>Docker</span>
        </div>
        <div class="badge-item">
          <img class="badge-icon" src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/kubernetes.svg" alt="Kubernetes" />
          <span>Kubernetes</span>
        </div>
        <div class="badge-item">
          <img class="badge-icon" src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/hashicorp-terraform.svg" alt="Terraform" />
          <span>Terraform</span>
        </div>
        <div class="badge-item">
          <img class="badge-icon" src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/grafana.svg" alt="Grafana" />
          <span>Monitoring</span>
        </div>
        <div class="badge-item">
          <img class="badge-icon" src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/gitlab.svg" alt="GitLab" />
          <span>CI/CD</span>
        </div>
        <div class="badge-item">
          <img class="badge-icon" src="https://cdn.jsdelivr.net/gh/selfhst/icons/svg/ansible.svg" alt="Ansible" />
          <span>Automation</span>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="hero__actions">
<<<<<<< HEAD
        <a href="/Infrastructure/" class="btn btn--primary">📚 Browse Guides</a>
=======
        <a href="/guide/" class="btn btn--primary">开始</a>
        <a
          href="https://github.com/vitejs/vite"
          target="_blank"
          class="btn btn--outline"
        >
          <img src="./github.svg" alt="GitHub logo" width="20" height="20" />
          GitHub
        </a>
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
      </div>
    </div>

    <!-- Animated Diagram -->
    <HeroDiagram />
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  z-index: 2;
  margin-bottom: 0;
  background-color: #101010;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  max-width: 902px;
  margin: 60px auto 0;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    margin: 95px auto 0;
  }
}

.gradient-text {
  background: linear-gradient(120deg, #bd34fe 30%, #41d1ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.highlight {
  color: #ffd700;
  font-weight: 600;
}

.tech-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 30px 0;
  max-width: 700px;
  width: 100%;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
}

.badge-item:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.badge-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.hero__pill {
  color: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  display: inline-flex;
  padding: 6px 16px;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  border: 1px solid rgba(189, 52, 254, 0.5);
  background: radial-gradient(1686.42% 113.39% at 83.25% 2.56%,
      rgba(189, 52, 254, 0.1) 0%,
      rgba(189, 52, 254, 0) 100%);
  box-shadow: none;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  span {
    color: #fff;
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  &:hover {
    animation: hero-pill-glow 1600ms ease-out infinite alternate;
  }
}

@keyframes hero-pill-glow {
  0% {
    border-color: rgba(189, 52, 254, 0.5);
    box-shadow:
      0 0 5px rgba(189, 52, 254, 0.01),
      inset 0 0 5px rgba(189, 52, 254, 0.1);
  }

  100% {
    border-color: rgba(189, 52, 254, 0.6);
    box-shadow:
      0 0 20px rgba(189, 52, 254, 0.2),
      inset 0 0 10px rgba(189, 52, 254, 0.2);
  }
}

.hero__actions {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
}
</style>
