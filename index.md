---
title: DevSecOps
titleTemplate: The learning path to DevSecOps
pageClass: landing dark

layout: home
aside: false
editLink: false
markdownStyles: false
---

<script setup>
import Hero from '.vitepress/theme/components/landing/1. hero-section/HeroSection.vue'
import FeatureSection from './.vitepress/theme/components/landing/2. feature-section/FeatureSection.vue'
import FrameworksSection from './.vitepress/theme/components/landing/3. frameworks-section/FrameworksSection.vue'
import GetStartedSection from '.vitepress/theme/components/landing/6. get-started-section/GetStartedSection.vue'
import FeatureInstantServerStart from './.vitepress/theme/components/landing/2. feature-section/FeatureInstantServerStart.vue'
import FeatureHMR from './.vitepress/theme/components/landing/2. feature-section/FeatureHMR.vue'
import FeatureRichFeatures from './.vitepress/theme/components/landing/2. feature-section/FeatureRichFeatures.vue'
import FeatureOptimizedBuild from './.vitepress/theme/components/landing/2. feature-section/FeatureOptimizedBuild.vue'
import FeatureFlexiblePlugins from './.vitepress/theme/components/landing/2. feature-section/FeatureFlexiblePlugins.vue'
import FeatureTypedAPI from './.vitepress/theme/components/landing/2. feature-section/FeatureTypedAPI.vue'
import FeatureSSRSupport from './.vitepress/theme/components/landing/2. feature-section/FeatureSSRSupport.vue'
import FeatureCI from './.vitepress/theme/components/landing/2. feature-section/FeatureCI.vue'
</script>

<div class="VPHome">
  <Hero/>
  <FeatureSection title="🎯 DevSecOps fundamentals" description="Learn core concepts through practical examples" type="blue">
    <FeatureInstantServerStart />
    <FeatureHMR />
    <FeatureRichFeatures />
    <FeatureOptimizedBuild />
  </FeatureSection>
  <FeatureSection title="🏗️ Advanced implementation" description="Security patterns, monitoring, and automation" type="pink" class="feature-section--flip">
    <FeatureFlexiblePlugins />
    <FeatureTypedAPI />
    <FeatureSSRSupport />
    <FeatureCI />
  </FeatureSection>
  <FrameworksSection />
  <!-- <SponsorSection /> -->
  <GetStartedSection />
</div>
