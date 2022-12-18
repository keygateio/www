---
layout: home

hero:
  name: Keygate
  text: Open Source Auth
  tagline: Never waste time implementing authentication again.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/keygateio/keygate

features:
  - icon: ⚡️
    title: Fast and lightweight
    details: A single binary that will handle everything for you. No need to install a database or configure a server.
  - icon: 🖖
    title: Easy to use
    details: Sane and secure defaults. No need to configure anything.
  - icon: 🛠️
    title: Open Source
    details: Keygate is open source and free to use. No vendor lock-in, no hidden fees. You own your data.
---

<style lang="scss">
  .VPHomeHero .container {
    margin-top: 5rem;
  } 
  hr {
    border: none;
    border-top: 1px solid var(--vp-c-divider-light);
    margin: 88px 24px 96px;
  }
</style>

<script setup>
  import { VPTeamMembers } from "vitepress/theme";

  const members = [
    {
      avatar: "https://avatars.githubusercontent.com/u/10697536?v=4",
      name: "Henry Gressmann",
      title: "Creator",
      links: [
        { icon: "github", link: "https://github.com/explodingcamera" },
      ],
    },
  ];
</script>

<hr/>

<VPTeamMembers size="medium" :members="members" />
