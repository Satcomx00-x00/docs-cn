<<<<<<< HEAD
import type { DefaultTheme } from 'vitepress'
import { defineConfig, createContentLoader } from 'vitepress'
=======
import path from 'node:path'
import fs from 'node:fs'
import type { DefaultTheme, HeadConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import type { PluginOption } from 'vite'
import { markdownItImageSize } from 'markdown-it-image-size'
import { buildEnd } from './buildEnd.config'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { joinURL, withoutTrailingSlash } from 'ufo'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { ogKeywords } from '../scripts/ogKeywords.generated'

// Enhanced SEO descriptions with targeted keywords
const ogDescription = 'Learn DevSecOps through practical guides, CI/CD pipelines, GitHub Actions templates, and security tools like Fail2Ban, Trivy Scanner, and more'
const ogImage = 'https://devsecforge.io/icons/android-chrome-512x512.png'
const ogTitle = 'DevSecOps Documentation - CI/CD, GitHub Actions, Security Tools'
const ogUrl = 'https://devsecforge.io'

// netlify envs
const deployURL = process.env.DEPLOY_PRIME_URL || ''
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'dev'

const deployType = (() => {
  switch (deployURL) {
    case 'https://main--vite-docs-main.netlify.app':
      return 'main'
    case '':
      return 'local'
    default:
      return 'release'
  }
})()
const additionalTitle = ((): string => {
  switch (deployType) {
    case 'main':
      return ' (main branch)'
    case 'local':
      return ' (local)'
    case 'release':
      return ''
  }
})()
<<<<<<< HEAD
=======
const versionLinks = ((): DefaultTheme.NavItemWithLink[] => {
  const oldVersions: DefaultTheme.NavItemWithLink[] = [
    {
      text: 'Vite 6 Docs',
      link: 'https://v6.vite.dev',
    },
    {
      text: 'Vite 5 Docs',
      link: 'https://v5.vite.dev',
    },
    {
      text: 'Vite 4 Docs',
      link: 'https://v4.vite.dev',
    },
    {
      text: 'Vite 3 Docs',
      link: 'https://v3.vite.dev',
    },
    {
      text: 'Vite 2 Docs',
      link: 'https://v2.vite.dev',
    },
  ]
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4

export default withMermaid(
  defineConfig({
    // Remove the existing sitemap configuration as we're using buildEnd for it
    
    // Enable lastUpdated for <lastmod> tags in sitemap
    lastUpdated: true,
    
    // Enable clean URLs for better SEO (removes .html extension)
    cleanUrls: true,
    
    mermaid: {
      // Theme configuration
      theme: {
        light: 'default',
        dark: 'dark'
      },

      // Global Mermaid configuration
      mermaidConfig: {
        startOnLoad: true,
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
          nodeSpacing: 100 // Increase spacing between nodes
          , rankSpacing: 100 // Increase spacing between ranks/levels
        },
        securityLevel: 'loose',
        viewport: {
          width: 1200,
          height: 900
        },
        interaction: {
          enabled: true, // Enable all interactions
          click: true, // Enable click events
          hover: true, // Enable hover events
          pan: true, // Enable panning
          zoomInButton: true, // Show zoom in button
          zoomOutButton: true // Show zoom out button
        },
        // Global font size settings
        fontSize: 16, // Increased base font size
        fontFamily: 'Inter',
        scale: 1.8, // Global scale factor
        maxTextSize: 12, // Maximum text size in flowcharts

        // Sequence diagram specific settings
        sequence: {
          width: 1200, // Width of sequence diagrams
          height: 800, // Height of sequence diagrams
          boxMargin: 20, // Margin around boxes
          messageMargin: 60 // Margin between messages
        }
      }
    },
    title: 'DevSecOps',
    description: 'Comprehensive DevSecOps documentation covering CI/CD pipelines, GitHub Actions templates, Fail2Ban configuration, Trivy scanner, and security best practices',
    lang: 'en-EN',

    head: [
      ['link', { rel: 'icon', type: 'image/png', href: '/icons/android-chrome-192x192.png' }],
      [
        'link',
        { rel: 'alternate', type: 'application/rss+xml', title: 'DevSecOps RSS Feed', href: '/blog.rss' }
      ],
      [
        'link',
        { rel: 'alternate', type: 'application/atom+xml', title: 'DevSecOps Atom Feed', href: '/blog.atom' }
      ],
      [
        'link',
        { rel: 'alternate', type: 'application/json', title: 'DevSecOps JSON Feed', href: '/blog.json' }
      ],
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      [
        'link',
        {
<<<<<<< HEAD
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'true'
        }
      ],
      [
        'link',
        {
          rel: 'preload',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap',
          as: 'style'
        }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap'
        }
      ],
      ['link', { rel: 'me', href: 'https://m.webtoo.ls/@vite' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: ogTitle }],
      ['meta', { property: 'og:image', content: ogImage }],
      ['meta', { property: 'og:url', content: ogUrl }],
      ['meta', { property: 'og:description', content: ogDescription }],
      ['meta', { property: 'og:site_name', content: 'DevSecForge' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:site', content: '@devsecforge' }],
      ['meta', { name: 'twitter:title', content: ogTitle }],
      ['meta', { name: 'twitter:description', content: ogDescription }],
      ['meta', { name: 'twitter:image', content: ogImage }],
      ['meta', { name: 'theme-color', content: '#bd34fe' }],
      // Add keywords meta tag for search engines
      ['meta', { name: 'keywords', content: ogKeywords.join(', ') }],
      // Add extra meta tags for SEO "first impressions" and top result intent
      ['meta', { name: 'google-site-verification', content: 'first-impression-top-result' }],
      ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }],
      // Add OpenGraph and Twitter meta tags for each main keyword/topic
      ['meta', { property: 'og:title', content: 'DevSecOps CI/CD & GitHub Actions Templates' }],
      ['meta', { property: 'og:title', content: 'Fail2Ban Configuration & Security Best Practices' }],
      ['meta', { property: 'og:title', content: 'Trivy Scanner for Container Security' }],
      ['meta', { property: 'og:title', content: 'Portainer High Availability Guide' }],
      ['meta', { property: 'og:title', content: 'Wireguard-UI VPN Management' }],
      ['meta', { property: 'og:title', content: 'Bandit Python Security Linter' }],
      ['meta', { property: 'og:title', content: 'Gosec SecureCodeWarrior GitHub Action' }],
      ['meta', { name: 'twitter:title', content: 'DevSecOps CI/CD & GitHub Actions Templates' }],
      ['meta', { name: 'twitter:title', content: 'Fail2Ban Configuration & Security Best Practices' }],
      ['meta', { name: 'twitter:title', content: 'Trivy Scanner for Container Security' }],
      ['meta', { name: 'twitter:title', content: 'Portainer High Availability Guide' }],
      ['meta', { name: 'twitter:title', content: 'Wireguard-UI VPN Management' }],
      ['meta', { name: 'twitter:title', content: 'Bandit Python Security Linter' }],
      ['meta', { name: 'twitter:title', content: 'Gosec SecureCodeWarrior GitHub Action' }],
      // Add FAQPage and Article structured data for Google rich results
      ['script', { type: 'application/ld+json' }, `
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is DevSecOps CI/CD?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "DevSecOps CI/CD integrates security into continuous integration and deployment pipelines, ensuring code and infrastructure are secure at every stage."
              }
            },
            {
              "@type": "Question",
              "name": "How do I configure Fail2Ban for maximum security?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fail2Ban configuration involves setting up jail rules, ban times, and log monitoring to automatically block malicious IPs and brute-force attempts."
              }
            },
            {
              "@type": "Question",
              "name": "What is Trivy Scanner and how is it used?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Trivy Scanner is an open-source tool for scanning container images, filesystems, and IaC for vulnerabilities, secrets, and misconfigurations."
              }
            },
            {
              "@type": "Question",
              "name": "How do I enable high availability in Portainer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Portainer high availability is achieved by deploying multiple instances with a shared database and load balancer for failover and redundancy."
              }
            },
            {
              "@type": "Question",
              "name": "What is Wireguard-UI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wireguard-UI is a web-based management interface for Wireguard VPN, simplifying user and peer management."
              }
            },
            {
              "@type": "Question",
              "name": "How do I use Bandit Python Security Linter?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bandit scans Python code for common security issues, such as hardcoded passwords, insecure cryptography, and injection risks."
              }
            },
            {
              "@type": "Question",
              "name": "How do I use securecodewarrior/github-action-gosec?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The securecodewarrior/github-action-gosec integrates Go security scanning into GitHub Actions workflows, detecting vulnerabilities in Go code."
              }
            }
          ]
        }
      `],
      ['script', { type: 'application/ld+json' }, `
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "DevSecOps CI/CD, GitHub Actions Templates, Fail2Ban Configuration, Trivy Scanner, Portainer High Availability, Wireguard-UI, Bandit Python Security Linter, securecodewarrior/github-action-gosec",
          "keywords": "${ogKeywords.join(', ')}",
          "author": { "@type": "Organization", "name": "DevSecForge" },
          "publisher": { "@type": "Organization", "name": "DevSecForge" },
          "image": "${ogImage}",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "${ogUrl}" }
        }
      `],
      // ...existing code...
=======
          text: 'Vite 7 Docs (release)',
          link: 'https://vite.dev',
        },
        ...oldVersions,
      ]
    case 'release':
      return oldVersions
  }
})()

function inlineScript(file: string): HeadConfig {
  return [
    'script',
    {},
    fs.readFileSync(
      path.resolve(__dirname, `./inlined-scripts/${file}`),
      'utf-8',
    ),
  ]
}

export default defineConfig({
  title: 'Vite 官方中文文档',
  description: '下一代前端工具链',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'link',
      { rel: 'alternate', type: 'application/rss+xml', href: '/blog.rss' },
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
    ],

    themeConfig: {
      logo: '/icons/android-chrome-192x192.png',

      editLink: {
        pattern: 'https://github.com/devsecforge/docs/edit/main/:path',
        text: 'Suggest changes to this page'
      },

      outline: {
        label: 'On this page',
        level: [2, 3]
      },
<<<<<<< HEAD

      search: {
        provider: 'algolia',
        options: {
          appId: '7H67QR5P0A',
          apiKey: '208bb9c14574939326032b937431014b',
          indexName: 'vitejs',
          searchParameters: {
            facetFilters: ['tags:cn']
          },
          placeholder: 'Search documentation',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search'
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear the query',
                resetButtonAriaLabel: 'Clear the query',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel'
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'No search history',
                saveRecentSearchButtonTitle: 'Save to search history',
                removeRecentSearchButtonTitle: 'Remove from search history',
                favoriteSearchesTitle: 'Favorites',
                removeFavoriteSearchButtonTitle: 'Remove from favorites'
              },
              errorScreen: {
                titleText: 'Unable to fetch results',
                helpText: 'You might need to check your network connection'
              },
              footer: {
                selectText: 'Select',
                navigateText: 'Navigate',
                closeText: 'Close',
                searchByText: 'Search provider'
              },
              noResultsScreen: {
                noResultsText: 'No relevant results found',
                suggestedQueryText: 'You can try querying',
                reportMissingResultsText:
                  'Do you think this query should have results?',
                reportMissingResultsLinkText: 'Let us know'
              }
            }
=======
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600&family=IBM+Plex+Mono:wght@400&display=swap',
      },
    ],
    inlineScript('banner.js'),
    ['link', { rel: 'me', href: 'https://m.webtoo.ls/@vite' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { property: 'og:site_name', content: 'vitejs' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'TPLGJZGR',
        'data-spa': 'auto',
        defer: '',
      },
    ],
  ],

  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://vite.dev' },
    ja: { label: '日本語', link: 'https://ja.vite.dev' },
    es: { label: 'Español', link: 'https://es.vite.dev' },
    pt: { label: 'Português', link: 'https://pt.vite.dev' },
    ko: { label: '한국어', link: 'https://ko.vite.dev' },
    de: { label: 'Deutsch', link: 'https://de.vite.dev' },
    fa: { label: 'فارسی', link: 'https://fa.vite.dev' },
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      pattern: 'https://github.com/vitejs/docs-cn/edit/main/:path',
      text: '为此页提供修改建议',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    socialLinks: [
      { icon: 'bluesky', link: 'https://bsky.app/profile/vite.dev' },
      { icon: 'mastodon', link: 'https://elk.zone/m.webtoo.ls/@vite' },
      { icon: 'x', link: 'https://x.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vite.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
          }
        }
      },
<<<<<<< HEAD

      docFooter: {
        prev: 'Previous page',
        next: 'Next page'
      },

      footer: {
        message: `Released under the MIT License. (${commitRef})`,
        copyright: 'Copyright © 2024-Now - DevSecForge'
      },

      nav: [
        {
          component: 'ReleaseTag'
        },
        {
          text: 'Infrastructure',
          link: '/Documentations/Infrastructure/',
          activeMatch: '/Documentations/Infrastructure/'
        },
        { text: 'CyberSec', link: '/Documentations/CyberSec/', activeMatch: '/Documentations/CyberSec/' },
        { text: 'CI/CD', link: '/Documentations/CICD/', activeMatch: '/Documentations/CICD/' },
        { text: 'Development', link: '/Documentations/Development/', activeMatch: '/Documentations/Development/' },
        { text: 'Others', link: '/Documentations/Others/', activeMatch: '/Documentations/Others/' },
      ],

      sidebar: {
        '/Documentations/Infrastructure/': [
=======
      { text: '指引', link: '/guide/', activeMatch: '/guide/' },
      { text: '配置', link: '/config/', activeMatch: '/config/' },
      { text: '插件', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: '相关链接',
        items: [
          { text: '团队成员', link: '/team' },
          { text: '最新博客', link: '/blog' },
          { text: '发布策略', link: '/releases' },
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
          {
            text: 'Infrastructure',
            items: [
              {
                text: 'Containerization',
                collapsed: false,
                items: [
                  {
                    text: '📌 Docker',
                    collapsed: true,
                    items: [
                      {
                        text: 'Docker',
                        link: '/Documentations/Infrastructure/Docker/Docker'
                      },
                      {
                        text: 'Docker Swarm',
                        link: '/Documentations/Infrastructure/Docker/DockerSwarm'
                      },
                      {
                        text: 'Portainer',
                        link: '/Documentations/Infrastructure/Docker/Portainer'
                      }
                    ]
                  },
                  {
                    text: '📌 Kubernetes',
                    collapsed: true,
                    items: [
                      {
                        text: 'Learning Roadmap',
                        link: '/Documentations/Infrastructure/Kubernetes/Roadmap'
                      },
                      {
                        text: 'Install',
                        link: '/Documentations/Infrastructure/Kubernetes/Install'
                      },
                      {
                        text: 'Basic Deployment',
                        link: '/Documentations/Infrastructure/Kubernetes/Basic-deploy'
                      },
                      {
                        text: 'Configuration',
                        link: '/Documentations/Infrastructure/Kubernetes/Configuration'
                      },
                      {
                        text: 'Cluster Setup',
                        link: '/Documentations/Infrastructure/Kubernetes/Cluster-Setup'
                      }
                    ]
                  },
                  {
                    text: '📌 Terraform',
                    collapsed: true,
                    items: [
                      {
                        text: 'Course Outline',
                        link: '/Documentations/Infrastructure/Terraform/CourseOutline'
                      },
                      {
                        text: 'Install',
                        link: '/Documentations/Infrastructure/Terraform/Install'
                      },
                      {
                        text: 'Configuration',
                        link: '/Documentations/Infrastructure/Terraform/Configuration'
                      }
                    ]
                  }
                ]
              },
              {
                text: 'Applications',
                collapsed: false,
                items: [
                  {
                    text: 'Vaultwarden',
                    link: '/Documentations/Infrastructure/Vaultwarden'
                  },
                  {
                    text: 'Watchtower',
                    link: '/Documentations/Infrastructure/Watchtower'
                  }
                ]
              },

              {
                text: 'Networking',
                collapsed: false,
                items: [
                  {
                    text: 'Wireguard',
                    link: '/Documentations/Infrastructure/Networking/Wireguard'
                  },
                  {
                    text: 'Traefik',
                    link: '/Documentations/Infrastructure/Networking/Traefik'
                  },
                  {
                    text: 'Authentik',
                    link: '/Documentations/Infrastructure/Networking/Authentik'
                  }
                ]
              }
            ]
          }
        ],
        '/Documentations/CyberSec/': [
          {
<<<<<<< HEAD
            text: 'CyberSec',
            items: [
              {
                text: 'Applications',
                collapsed: false,
                items: [
                  {
                    text: 'CrowdSec',
                    link: '/Documentations/CyberSec/CrowdSec'
                  },
                  {
                    text: 'Fail2Ban',
                    link: '/Documentations/CyberSec/Fail2Ban'
                  }
                ]
              },
              {
                text: 'Methodologies',
                collapsed: false,
                items: [
                  {
                    text: 'LinuxHardening',
                    link: '/Documentations/CyberSec/LinuxHardening'
                  }
                ]
              },
              {
                text: 'Container Security',
                collapsed: false,
                items: [
                  {
                    text: 'Docker Hardening',
                    link: '/Documentations/CyberSec/Container-Security/Docker-Hardening'
                  }
                ]
              }
            ]
          }
        ],
        '/Documentations/CICD/': [
=======
            text: 'Vite v6 文档（英文）',
            link: 'https://v6.vite.dev'
          },
          {
            text: 'Vite v5 文档（英文）',
            link: 'https://v5.vite.dev'
          },
          {
            text: 'Vite v4 文档（英文）',
            link: 'https://v4.vite.dev'
          },
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
          {
            text: 'CI/CD',
            items: [
              {
                text: 'Continuous Integration',
                collapsed: false,
                items: [
                  {
                    text: 'GitHub Actions',
                    link: '/Documentations/CICD/Github-CI'
                  },
                  {
                    text: 'GitLab CI',
                    link: '/Documentations/CICD/GitLab-CI'
                  },
                  {
                    text: 'GitHub Actions Pipelines',
                    link: '/Documentations/CICD/GitHub-Actions-Pipeline'
                  }
                ]
              },
              {
                text: 'Static Code Analysis',
                collapsed: false,
                items: [
                  {
                    text: 'Semgrep',
                    link: '/Documentations/CICD/Static-Analysis/Semgrep'
                  },
                  {
                    text: 'SonarQube',
                    link: '/Documentations/CICD/Static-Analysis/SonarQube'
                  },
                  {
                    text: 'CodeQL',
                    link: '/Documentations/CICD/Static-Analysis/CodeQL'
                  },
                  {
                    text: 'Bandit',
                    link: '/Documentations/CICD/Static-Analysis/Bandit'
                  },
                  {
                    text: 'gosec',
                    link: '/Documentations/CICD/Static-Analysis/gosec'
                  }
                ]
              },
              {
                text: 'Security Scanning',
                collapsed: false,
                items: [
                  {
                    text: 'Trivy Security Scanner',
                    link: '/Documentations/CICD/Trivy'
                  },
                  {
                    text: 'Complete Security Scanning Tutorial',
                    link: '/Documentations/CICD/Pipline-Templates'
                  }
                ]
              },
              {
                text: 'Pipeline Templates',
                collapsed: false,
                items: [
                  {
                    text: 'GitHub Actions Templates',
                    link: '/Documentations/CICD/Github-Templates'
                  },
                  {
                    text: 'GitLab CI Templates',
                    link: '/Documentations/CICD/GitLab-Templates'
                  }
                ]
              }
              // {
              //   text: 'Continuous Deployment',
              //   collapsed: false,
              //   items: [
              //     {
              //       text: 'Docker Registry',
              //       link: '/Documentations/CICD/Docker-Registry'
              //     },
              //     {
              //       text: 'Automated Deployment',
              //       link: '/Documentations/CICD/Automated-Deployment'
              //     }
              //   ]
              // }
            ]
          }
        ],
        '/Documentations/Development/': [
          {
            text: 'Development',
            items: [
              {
                text: 'Languages',
                collapsed: false,
                items: [
                  {
                    text: '📌 Go',
                    collapsed: true,
                    items: [
                      {
                        text: 'Go Basics',
                        link: '/Documentations/Development/Languages/Go/Go-Basics'
                      },
                      {
                        text: 'Installing Go',
                        link: '/Documentations/Development/Languages/Go/Go-Install'
                      }
                    ]
                  },
                  {
                    text: '📌 Rust',
                    collapsed: true,
                    items: [
                      {
                        text: 'Rust Basics',
                        link: '/Documentations/Development/Languages/Rust/Rust-Basics'
                      },
                      {
                        text: 'Installing Rust',
                        link: '/Documentations/Development/Languages/Rust/Rust-Install'
                      },
                      {
                        text: 'Data Types',
                        link: '/Documentations/Development/Languages/Rust/Rust-Types'
                      },
                      {
                        text: 'Strings',
                        link: '/Documentations/Development/Languages/Rust/Rust-Strings'
                      },
                      {
                        text: 'Operators',
                        link: '/Documentations/Development/Languages/Rust/Rust-Operators'
                      },
                      {
                        text: 'Flow Control',
                        link: '/Documentations/Development/Languages/Rust/Rust-FlowControl'
                      },
                      {
                        text: 'Functions',
                        link: '/Documentations/Development/Languages/Rust/Rust-Functions'
                      },
                      {
                        text: 'Miscellaneous',
                        link: '/Documentations/Development/Languages/Rust/Rust-Misc'
                      }
                    ]
                  }
                ]
              },
              {
                text: 'Best Practices',
                collapsed: false,
                items: [
                  {
                    text: 'IDE Setup',
                    link: '/Documentations/Development/VScode/VScode-SSH'
                  },
                  {
                    text: 'Code Formatting',
                    link: '/Documentations/Development/VScode/VScode-Python-Lint-Format'
                  },
                  {
                    text: 'Version Control',
                    link: '/Documentations/Development/AutoVersionning'
                  }
                ]
              }
            ]
          }
        ],
        '/Documentations/Others/': [
          {
            text: 'Others',
            items: [
              {
                text: 'Miscellaneous',
                collapsed: false,
                items: [
                  {
                    text: 'Bot Terms of Service',
                    link: '/Documentations/Others/Terms-of-Service'
                  },
                  {
                    text: 'Bot Privacy Policy',
                    link: '/Documentations/Others/Privacy-Policy'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    transformPageData(pageData) {
      // Initialize head array if it doesn't exist
      pageData.frontmatter.head ??= []

<<<<<<< HEAD
      // Keyword aliases for SEO
      const keywordAliases: Record<string, string[]> = {
        'fail2ban': ['fail2ban configuration', 'fail2ban config'],
        'ci/cd': ['devsecops ci cd', 'ci cd', 'devsecops ci/cd'],
        'github actions': ['github actions templates'],
        'gosec': ['securecodewarrior/github-action-gosec'],
        'wireguard': ['wireguard-ui'],
        'bandit': ['bandit python security linter'],
        'trivy': ['trivy scanner'],
        'portainer': ['portainer high availability']
      }

      // Create canonical URL without .html extension for better SEO
      const canonicalUrl = joinURL(
        ogUrl,
        withoutTrailingSlash(pageData.relativePath.replace(/(index)?\.md$/, ''))
      )

      // Create page-specific keywords based on title, description, and all target keywords
      let baseKeywords = [
        ...ogKeywords,
        ...(pageData.frontmatter.title || pageData.title || '').toLowerCase().split(' '),
        ...(pageData.frontmatter.description || pageData.description || '').toLowerCase().split(' ')
      ]
        .filter(keyword => keyword.length > 2)
        .filter((item, index, self) => self.indexOf(item) === index)

      // Add aliases for each keyword
      let pageKeywords: string[] = []
      baseKeywords.forEach(keyword => {
        pageKeywords.push(keyword)
        if (keywordAliases[keyword]) {
          pageKeywords.push(...keywordAliases[keyword])
        }
      })
      // Deduplicate and limit to 25
      pageKeywords = pageKeywords.filter((item, index, self) => self.indexOf(item) === index).slice(0, 25)
      const pageKeywordsStr = pageKeywords.join(', ')

      // Add dynamic metadata for better SEO and social sharing
      pageData.frontmatter.head.push(
        // Canonical URL
        ['link', { rel: 'canonical', href: canonicalUrl }],

        // OpenGraph title
        ['meta', {
          property: 'og:title',
          content: pageData.frontmatter.title || pageData.title || ogTitle
        }],

        // Twitter title
        ['meta', {
          name: 'twitter:title',
          content: pageData.frontmatter.title || pageData.title || ogTitle
        }],

        // OpenGraph description
        ['meta', {
          property: 'og:description',
          content: pageData.frontmatter.description || pageData.description || ogDescription
        }],

        // Twitter description
        ['meta', {
          name: 'twitter:description',
          content: pageData.frontmatter.description || pageData.description || ogDescription
        }],

        // OpenGraph URL for the current page
        ['meta', { property: 'og:url', content: canonicalUrl }],

        // Page-specific keywords (with aliases)
        ['meta', { name: 'keywords', content: pageKeywordsStr }],
        // Add extra meta tags for SEO "first impressions" and top result intent
        ['meta', { name: 'google-site-verification', content: 'first-impression-top-result' }],
        ['meta', { name: 'robots', content: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' }]
      )
      
      // Add structured data for the current page
      pageData.frontmatter.head.push(
        ['script', { type: 'application/ld+json' },
          `{
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "${pageData.frontmatter.title || pageData.title || ogTitle}",
            "description": "${pageData.frontmatter.description || pageData.description || ogDescription}",
            "image": "${pageData.frontmatter.image || ogImage}",
            "author": {
              "@type": "Organization",
              "name": "DevSecForge"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DevSecForge",
              "logo": {
                "@type": "ImageObject",
                "url": "${ogUrl}/icons/android-chrome-192x192.png"
              }
            },
            "url": "${canonicalUrl}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${canonicalUrl}"
            },
            "dateModified": "${pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : new Date().toISOString()}"
          }`
        ]
      )
      
      // Add OpenGraph image if specified in frontmatter, otherwise use default
      if (pageData.frontmatter.image) {
        const imageUrl = pageData.frontmatter.image.startsWith('http') 
          ? pageData.frontmatter.image 
          : joinURL(ogUrl, pageData.frontmatter.image)
        
        pageData.frontmatter.head.push(
          ['meta', { property: 'og:image', content: imageUrl }],
          ['meta', { name: 'twitter:image', content: imageUrl }]
        )
      }
      
      return pageData
    },
    markdown: {
      codeTransformers: [transformerTwoslash()],
      config(md) {
        md.use(groupIconMdPlugin)
      }
    },
    vite: {
      plugins: [
        groupIconVitePlugin({
          customIcon: {
            firebase: 'vscode-icons:file-type-firebase',
            '.gitlab-ci.yml': 'vscode-icons:file-type-gitlab'
          }
        })
=======
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            {
              text: '开始',
              link: '/guide/',
            },
            {
              text: '理念',
              link: '/guide/philosophy',
            },
            {
              text: '为什么选 Vite',
              link: '/guide/why',
            },
          ],
        },
        {
          text: '指引',
          items: [
            {
              text: '功能',
              link: '/guide/features',
            },
            {
              text: '命令行接口',
              link: '/guide/cli'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '部署静态站点',
              link: '/guide/static-deploy'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {
              text: '故障排除',
              link: '/guide/troubleshooting',
            },
            {
              text: '性能',
              link: '/guide/performance',
            },
            {
              text: 'Rolldown',
              link: '/guide/rolldown',
            },
            {
              text: '从 v6 迁移',
              link: '/guide/migration',
            },
            {
              text: '破坏性变更',
              link: '/changes/',
            },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr',
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript',
            },
            {
              text: '配置参考',
              link: '/config/',
            },
          ],
        },
        {
          text: '环境 API',
          items: [
            {
              text: '介绍',
              link: '/guide/api-environment',
            },
            {
              text: '环境实例',
              link: '/guide/api-environment-instances',
            },
            {
              text: '插件',
              link: '/guide/api-environment-plugins',
            },
            {
              text: '框架',
              link: '/guide/api-environment-frameworks',
            },
            {
              text: '运行时',
              link: '/guide/api-environment-runtimes',
            },
          ],
        },
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            {
              text: '配置 Vite',
              link: '/config/'
            },
            {
              text: '共享选项',
              link: '/config/shared-options'
            },
            {
              text: '服务器选项',
              link: '/config/server-options'
            },
            {
              text: '构建选项',
              link: '/config/build-options'
            },
            {
              text: '预览选项',
              link: '/config/preview-options'
            },
            {
              text: '依赖优化选项',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'SSR 选项',
              link: '/config/ssr-options'
            },
            {
              text: 'Worker 选项',
              link: '/config/worker-options',
            },
          ],
        },
      ],
      '/changes/': [
        {
          text: '破坏性变更',
          link: '/changes/',
        },
        {
          text: '现在',
          items: [],
        },
        {
          text: '未来',
          items: [
            {
              text: '钩子函数中的 this.environment',
              link: '/changes/this-environment-in-hooks',
            },
            {
              text: 'HMR hotUpdate 插件钩子',
              link: '/changes/hotupdate-hook',
            },
            {
              text: '迁移到基于环境的API',
              link: '/changes/per-environment-apis',
            },
            {
              text: '使用 ModuleRunner API 进行服务端渲染',
              link: '/changes/ssr-using-modulerunner',
            },
            {
              text: '构建过程中的共享插件',
              link: '/changes/shared-plugins-during-build',
            },
          ],
        },
        {
          text: '过去',
          items: [],
        },
      ],
    },
  },
  transformPageData(pageData) {
    const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
      .replace(/\/index\.md$/, '/')
      .replace(/\.md$/, '')
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.unshift(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:title', content: pageData.title }],
    )
    return pageData
  },
  markdown: {
    // languages used for twoslash and jsdocs in twoslash
    languages: ['ts', 'js', 'json'],
    codeTransformers: [transformerTwoslash()],
    config(md) {
      md.use(groupIconMdPlugin)
      md.use(markdownItImageSize, {
        publicDir: path.resolve(import.meta.dirname, '../public'),
      })
    },
  },
  vite: {
    plugins: [
      // @ts-ignore
      groupIconVitePlugin({
        customIcon: {
          firebase: 'vscode-icons:file-type-firebase',
          '.gitlab-ci.yml': 'vscode-icons:file-type-gitlab',
        },
      }),
    ],
    optimizeDeps: {
      include: [
        '@shikijs/vitepress-twoslash/client',
        'gsap',
        'gsap/dist/ScrollTrigger',
        'gsap/dist/MotionPathPlugin',
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
      ],
      optimizeDeps: {
        include: [
          '@shikijs/vitepress-twoslash/client',
          'gsap',
          'gsap/dist/ScrollTrigger',
          'gsap/dist/MotionPathPlugin'
        ]
      }
    },
    buildEnd: async (siteConfig) => {
      // Run the existing buildEnd function if it exists
      if (typeof buildEnd === 'function') {
        await buildEnd(siteConfig);
      }
      
      // Generate sitemap with priority and changefreq attributes for better SEO
      const { outDir } = siteConfig;
      const hostname = 'https://devsecforge.io';
      const sitemap = new SitemapStream({ hostname });
      const pages = await createContentLoader('**/*.md').load();
      const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'));
      
      sitemap.pipe(writeStream);
      
      // High-priority pages based on target keywords
      const highPriorityPatterns = [
        '/documentations/cicd/github-templates',
        '/documentations/cicd/github-ci',
        '/documentations/cicd/trivy',
        '/documentations/cybersec/fail2ban',
        '/documentations/infrastructure/docker/portainer',
        '/documentations/infrastructure/networking/wireguard',
        '/documentations/cicd/static-analysis/bandit',
        '/documentations/cicd/static-analysis/gosec'
      ];
      
      // Process each page with appropriate priority
      pages.forEach((page) => {
        // Skip Terms of Service and Privacy Policy pages
        if (page.url.includes('/documentations/others/terms-of-service') || 
            page.url.includes('/documentations/others/privacy-policy')) {
          return;
        }
        
        // Determine priority based on URL patterns
        let priority = 0.7; // Default priority
        let changefreq = 'monthly'; // Default change frequency
        
        // Check if this is a high-priority page
        const isHighPriority = highPriorityPatterns.some(pattern => 
          page.url.toLowerCase().includes(pattern.toLowerCase())
        );
        
        if (page.url === '/') {
          priority = 1.0;
          changefreq = 'daily';
        } else if (isHighPriority) {
          priority = 0.9;
          changefreq = 'weekly';
        } else if (page.url.split('/').length <= 2) {
          priority = 0.8;
          changefreq = 'weekly';
        }
        
        // Write the URL to the sitemap with enhanced SEO attributes
        sitemap.write({
          url: page.url
            // Strip `index.html` from URL
            .replace(/index\.html$/g, '')
            // Ensure URL starts with a slash
            .replace(/^\/?/, '/'),
          lastmod: page.frontmatter?.lastUpdated 
            ? new Date(page.frontmatter.lastUpdated).toISOString()
            : undefined,
          priority: priority,
          changefreq: changefreq
        });
      });
      
      sitemap.end();
      
      // Wait for the stream to finish
      await new Promise((resolve) => writeStream.on('finish', resolve));
      
      console.log('Enhanced SEO sitemap generated successfully');
    },
  })
)
      
      console.log('Enhanced SEO sitemap generated successfully');
