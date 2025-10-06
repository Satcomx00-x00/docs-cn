<<<<<<< HEAD
import { onMounted, ref } from 'vue'
=======
import { onMounted, onUnmounted, ref } from 'vue'
import voidZeroSvg from './images/voidzero.svg'
import boltSvg from './images/bolt.svg'
import nuxtLabsSvg from './images/nuxtlabs.svg'
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4

interface TechLogos {
  infrastructure: TechLogo[]
  containerization: TechLogo[]
  security: TechLogo[]
}

interface TechLogo {
  name: string
  img: string
  url: string
  hasDark?: true
}

<<<<<<< HEAD
const data = ref()

const techStack: TechLogos = {
  infrastructure: [
    {
      name: 'Docker',
      url: 'https://www.docker.com',
      img: '/images/docker.svg',
      hasDark: true
=======
// shared data across instances so we load only once.
const data = ref<{ tier: string; size: string; items: Sponsor[] }[]>()

const dataHost = 'https://sponsors.vuejs.org'
const dataUrl = `${dataHost}/vite.json`

export const voidZero = {
  name: 'VoidZero',
  url: 'https://voidzero.dev',
  img: voidZeroSvg,
} satisfies Sponsor

const viteSponsors: Pick<Sponsors, 'special' | 'gold'> = {
  special: [
    // sponsors patak-dev
    {
      name: 'Bolt',
      url: 'https://bolt.new',
      img: boltSvg,
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
    },
    {
<<<<<<< HEAD
      name: 'Kubernetes',
      url: 'https://kubernetes.io',
      img: '/images/kubernetes.svg',
      hasDark: true
    },
    {
      name: 'Terraform',
      url: 'https://www.terraform.io',
      img: '/images/terraform.svg',
      hasDark: true
=======
      name: 'NuxtLabs',
      url: 'https://nuxtlabs.com',
      img: nuxtLabsSvg,
    },
  ],
  gold: [
    // now automated via sponsors.vuejs.org too
  ],
}

function toggleDarkLogos() {
  if (data.value) {
    const isDark = document.documentElement.classList.contains('dark')
    data.value.forEach(({ items }) => {
      items.forEach((s: Sponsor) => {
        if (s.hasDark) {
          s.img = isDark
            ? s.img.replace(/(\.\w+)$/, '-dark$1')
            : s.img.replace(/-dark(\.\w+)$/, '$1')
        }
      })
    })
  }
}

export function useSponsor() {
  onMounted(async () => {
    const ob = new MutationObserver((list) => {
      for (const m of list) {
        if (m.attributeName === 'class') {
          toggleDarkLogos()
        }
      }
    })
    ob.observe(document.documentElement, { attributes: true })
    onUnmounted(() => {
      ob.disconnect()
    })

    if (data.value) {
      return
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
    }
  ],
  containerization: [
    {
      name: 'Traefik',
      url: 'https://traefik.io',
      img: '/images/traefik.svg',
      hasDark: true
    },
    {
      name: 'Portainer',
      url: 'https://www.portainer.io',
      img: '/images/portainer.svg',
      hasDark: true
    }
  ],
  security: [
    {
      name: 'CrowdSec',
      url: 'https://www.crowdsec.net',
      img: '/images/crowdsec.svg',
      hasDark: true
    },
    {
      name: 'Vaultwarden',
      url: 'https://github.com/dani-garcia/vaultwarden',
      img: '/images/vaultwarden.svg',
      hasDark: true
    }
  ]
}

export function useSponsor() {
  onMounted(() => {
    if (data.value) return

    data.value = [
      {
        tier: 'Infrastructure',
        size: 'big',
        items: techStack.infrastructure
      },
      {
        tier: 'Containerization',
        size: 'medium',
        items: techStack.containerization
      },
      {
        tier: 'Security',
        size: 'medium',
        items: techStack.security
      }
    ]
  })

  return {
    data
  }
}


