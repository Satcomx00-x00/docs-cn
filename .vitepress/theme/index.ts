import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import matomo from "vitepress-plugin-matomo";
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import './styles/vars.css'
import './styles/landing.css'
// import AsideSponsors from './components/AsideSponsors.vue'
import SvgImage from './components/SvgImage.vue'
import WwAds from './components/WwAds.vue'
import ReleaseTag from './components/ReleaseTag.vue'
import './custom.css'
import YouTubeVideo from './components/YouTubeVideo.vue'
import SponsorBanner from './components/SponsorBanner.vue'
import NonInheritBadge from './components/NonInheritBadge.vue'
import 'virtual:group-icons.css'
import YouTubePlayer from '../customComponents/youtube-player.vue'
import DifficultyIndicator from '../customComponents/DifficultyIndicator.vue'
import ToolComparisonMatrix from '../customComponents/ToolComparisonMatrix.vue'
import './styles/custom-layout.css' // Import the new custom layout CSS
import googleAnalytics from 'vitepress-plugin-google-analytics'


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'aside-outline-after': () => h(WwAds),
<<<<<<< HEAD
      // 'aside-ads-before': () => h(AsideSponsors),
=======
      'layout-top': () => h(SponsorBanner),
      'aside-ads-before': () => h(AsideSponsors),
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
    })
  },
  enhanceApp({ app }) {
    googleAnalytics({
      id: 'G-0WYVYHE3ED', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
    })
    app.component('SvgImage', SvgImage)
    app.component('ReleaseTag', ReleaseTag)
<<<<<<< HEAD
    app.component('YouTubePlayer', YouTubePlayer)
    app.component('DifficultyIndicator', DifficultyIndicator)
    app.component('ToolComparisonMatrix', ToolComparisonMatrix)
=======
    app.component('YouTubeVideo', YouTubeVideo)
    app.component('NonInheritBadge', NonInheritBadge)
>>>>>>> e3b27dfd1161ef215ae73a97a0fd43022c357df4
    app.use(TwoslashFloatingVue)
  },
} satisfies Theme

