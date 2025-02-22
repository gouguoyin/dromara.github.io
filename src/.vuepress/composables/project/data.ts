import { computed } from "vue";

import { useProjectLocale } from "./locales.js";
import { orderProjects } from "./utils.js";

export const noGiteeProjects = ["jinx", "athena"];
export const noGithubProjects = [
  "zyplayer-doc",
  "easy-trans",
  "x-easypdf",
  "image-combiner"
];
export const noImageProject = [
  "jinx",
  "athena",
  "open-capacity-platform",
  "hodor",
  "data-compare",
  "Binlog4j",
  "X-File-Storage",
  "yft-design",
  "payment-spring-boot",
  "ujcms",
  "mayfly-go",
  "skyeye-oa",
  "carbon",
  "warm-flow"
];

export const useProjectsData = () => {
  const projectLocale = useProjectLocale();

  // 手动将项目按 Gitee 的 star 数排序
  const projectOrder = computed(() => [
    {
      groupName: projectLocale.value.ENTERPRISE_CERTIFICATION,
      projects: ["sa-token", "MaxKey", "sureness"]
    },
    {
      groupName: projectLocale.value.POPULAR_TOOLS,
      projects: [
        "hutool",
        "go-view",
        "liteFlow",
        "electron-egg",
        "easy-es",
        "forest",
        "northstar",
        "dynamic-tp",
        "easyAi",
        "tianai-captcha",
        "zyplayer-doc",
        "x-easypdf",
        "image-combiner",
        "easy_trans",
        "sms4j",
        "Neutrino-Proxy",
        "X-File-Storage",
        "skyeye-oa",
        "mayfly-go",
        "dbswitch",
        "warm-flow",
        "ujcms",
        "dax-pay",
        "gobrs-async",
        "payment-spring-boot",
        "orion-visor",
        "stream-query",
        "DyJava",
        "Akali",
        "sayOrder",
        "easy-query",
        "mybatis-plus-ext",
        "redisfront",
        "fast-request",
        "Binlog4j",
        "WeMQ",
        "yft-design",
        "MilvusPlus",
        "open-giteye-api",
        "newcar",
        "jinx",
        "carbon"
      ]
    },
    {
      groupName: projectLocale.value.MICROSERVICE,
      projects: [
        "open-capacity-platform",
        "RuoYi-Vue-Plus",
        "lamp-cloud",
        "mendmix",
        "koalas-rpc",
        "dante-cloud",
        "J2EEFAST"
      ]
    },
    {
      groupName: projectLocale.value.OPERATIONS_AND_MAINTENANCE_CONTROL,
      projects: ["Jpom", "cubic", "TestHub", "athena", "domain-admin"]
    },
    {
      groupName: projectLocale.value.DISTRIBUTED_LOG,
      projects: ["TLog"]
    },
    {
      groupName: projectLocale.value.DISTRIBUTED_TRANSACTION,
      projects: ["hmily", "myth", "Raincat"]
    },
    {
      groupName: projectLocale.value.BIG_DATA,
      projects: ["data-compare", "CloudEon"]
    },

    {
      groupName: projectLocale.value.DISTRIBUTED_SCHEDULING,
      projects: ["Disjob", "hodor"]
    }
  ]);

  const projectItemsOrigin = computed(() => [
    {
      groupName: projectLocale.value.DISTRIBUTED_TRANSACTION,
      projects: [
        {
          name: "hmily",
          website: "https://gitee.com/dromara/hmily",
          description: projectLocale.value.HMILY_DESC,
          sponsor: "肖宇（yu199195）",
          date: "2017.09",
          link: `<a target="_blank" href="https://search.maven.org/search?q=g:org.dromara%20AND%20hmily">
        <img src="https://img.shields.io/maven-central/v/org.dromara/hmily.svg?label=maven%20central" />
    </a>
    <a target="_blank" href="https://github.com/Dromara/hmily/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?label=license" />
    </a>
    <a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
        <img src="https://img.shields.io/badge/JDK-8+-green.svg" />
    </a>
    <a target="_blank" href="https://github.com/dromara/hmily">
        <img src="https://github.com/dromara/hmily/workflows/build/badge.svg" />
    </a>
    <a href="https://codecov.io/gh/dromara/hmily">
        <img src="https://codecov.io/gh/dromara/hmily/branch/master/graph/badge.svg"/>
    </a>
    <a target="_blank" href='https://github.com/dromara/hmily'>
        <img src="https://img.shields.io/github/forks/dromara/hmily.svg" alt="github forks"/>
    </a>
    <a target="_blank" href='https://github.com/dromara/hmily'>
        <img src="https://img.shields.io/github/contributors/dromara/hmily.svg" alt="github contributors"/>
    </a>
   <a href="https://github.com/Dromara/hmily">
        <img src="https://tokei.rs/b1/github/Dromara/hmily?category=lines"/>
   </a>`
        },
        {
          name: "Raincat",
          website: "https://gitee.com/dromara/Raincat",
          description: projectLocale.value.RAINCAT_DESC,
          sponsor: "肖宇（yu199195）",
          date: "2017.09",
          link: `
        <a href="https%3A%2F%2Fgithub.com%2Fyu199195%2Fraincat"><img src="https://tokei.rs/b1/github/yu199195/raincat?category=lines" alt="Total lines"></a>
<a href="https%3A%2F%2Fgithub.com%2Fyu199195%2FRaincat%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/cran/l/devtools.svg" alt="License"></a>
<a href="http%3A%2F%2Fsearch.maven.org%2F%23search%257Cga%257C1%257Cg%253A%2522org.dromara%2522%2520AND%2520raincat"><img src="https://img.shields.io/maven-central/v/org.dromara/raincat.svg?label=maven%20central" alt="Maven Central"></a>
<a href="https%3A%2F%2Fshang.qq.com%2Fwpa%2Fqunwpa%3Fidkey%3D2e9e353fa10924812bc58c10ab46de0ca6bef80e34168bccde275f7ca0cafd85"><img src="https://img.shields.io/badge/chat-on%20QQ-ff69b4.svg?style=flat-square" alt="QQ群"></a>`
        },
        {
          name: "myth",
          website: "https://gitee.com/dromara/myth",
          description: projectLocale.value.MYTH_DESC,
          sponsor: "肖宇（yu199195）",
          date: "2017.12",
          link: `<a href="https%3A%2F%2Fgithub.com%2Fyu199195%2Fmyth"><img src="https://tokei.rs/b1/github/yu199195/myth?category=lines" alt="Total lines"></a>
<a href="https%3A%2F%2Fgithub.com%2Fyu199195%2Fmyth%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?label=license" alt="License"></a>
<a href="http%3A%2F%2Fsearch.maven.org%2F%23search%257Cga%257C1%257Cg%253A%2522org.dromara%2522%2520AND%2520myth"><img src="https://img.shields.io/maven-central/v/org.dromara/myth.svg?label=maven%20central" alt="Maven Central"></a>
<a href="https%3A%2F%2Fshang.qq.com%2Fwpa%2Fqunwpa%3Fidkey%3D2e9e353fa10924812bc58c10ab46de0ca6bef80e34168bccde275f7ca0cafd85"><img src="https://img.shields.io/badge/chat-on%20QQ-ff69b4.svg?style=flat-square" alt="QQ群"></a></p>`
        }
      ]
    },
    {
      groupName: projectLocale.value.POPULAR_TOOLS,
      projects: [
        {
          name: "hutool",
          website: "https://hutool.cn/",
          description: projectLocale.value.HUTOOL_DESC,
          sponsor: "Looly（loolly_admin）",
          date: "2021.03",
          link: `
<a target="_blank" href="https%3A%2F%2Fsearch.maven.org%2Fartifact%2Fcn.hutool%2Fhutool-all">
  <img src="https://img.shields.io/maven-central/v/cn.hutool/hutool-all.svg?label=Maven%20Central">
</a>
<a target="_blank" href="https%3A%2F%2Flicense.coscl.org.cn%2FMulanPSL2">
  <img src="https://img.shields.io/:license-MulanPSL2-blue.svg">
</a>
<a target="_blank" href="https%3A%2F%2Fwww.oracle.com%2Fjava%2Ftechnologies%2Fjavase%2Fjavase-jdk8-downloads.html">
  <img src="https://img.shields.io/badge/JDK-8+-green.svg">
</a>
<a target="_blank" href="https%3A%2F%2Ftravis-ci.com%2Fdromara%2Fhutool">
  <img src="https://travis-ci.com/dromara/hutool.svg?branch=v5-master">
</a>
<a href="https%3A%2F%2Fwww.codacy.com%2Fgh%2Fdromara%2Fhutool%2Fdashboard%3Futm_source%3Dgithub.com%26utm_medium%3Dreferral%26utm_content%3Ddromara%2Fhutool%26utm_campaign%3DBadge_Grade">
  <img src="https://app.codacy.com/project/badge/Grade/8a6897d9de7440dd9de8804c28d2871d">
</a>
<a href="https%3A%2F%2Fcodecov.io%2Fgh%2Fdromara%2Fhutool">
  <img src="https://codecov.io/gh/dromara/hutool/branch/v5-master/graph/badge.svg">
</a>
<a target="_blank" href="https%3A%2F%2Fgitter.im%2Fhutool%2FLobby%3Futm_source%3Dbadge%26utm_medium%3Dbadge%26utm_campaign%3Dpr-badge%26utm_content%3Dbadge">
  <img src="https://badges.gitter.im/hutool/Lobby.svg">
</a>
<a href="https%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Fk%3DQtsqXLkHpLjE99tkre19j6pjPMhSay1a%26jump_from%3Dwebapi">
<img src="https://img.shields.io/badge/QQ%E7%BE%A4%E2%91%A6-715292493-orange"></a>`
        },
        {
          name: "forest",
          website: "https://forest.dtflyx.com/",
          description: projectLocale.value.FOREST_DESC,
          sponsor: "公子骏（dt_flys）",
          date: "2021.03",
          link: `<a href="https://gitee.com/dromara/forest">
      <img src="https://gitee.com/dromara/forest/badge/star.svg" alt="Gitee Stars">
  </a>
  <a href="https%3A%2F%2Fwww.oracle.com%2Fjava%2Ftechnologies%2Fjavase%2Fjavase-jdk8-downloads.html">
      <img src="https://img.shields.io/badge/JDK-1.8+-yellow" alt="JDK">
  </a>
  <a href="https%3A%2F%2Fopensource.org%2Flicenses%2Fmit-license.php">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  </a>
  <a href="http%3A%2F%2Fforest.dtflyx.com%2F">
      <img src="https://img.shields.io/badge/document-1.x-e96.svg" alt="Documentation">
  </a>
  <a href="https://gitee.com/dromara/forest#%E8%81%94%E7%B3%BB%E4%BD%9C%E8%80%85">
      <img src="https://img.shields.io/badge/author-%E5%85%AC%E5%AD%90%E9%AA%8F-7af" alt="Author">
  </a>`
        },
        {
          name: "liteFlow",
          website: "https://yomahub.com/liteflow/",
          description: projectLocale.value.LITEFLOW_DESC,
          sponsor: "铂赛东（bryan31）",
          date: "2021.03",
          link: `
  <a href="https://gitee.com/dromara/liteFlow"><img src="https://gitee.com/dromara/liteFlow/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/liteFlow/members"><img src="https://gitee.com/dromara/liteFlow/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fliteflow"><img src="https://img.shields.io/github/stars/dromara/liteflow?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fliteflow%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/liteflow?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fliteflow%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/liteflow.svg?style=flat-square"></a>
  `
        },
        {
          name: "dynamic-tp",
          website: "https://juejin.cn/column/7053801521502224392",
          description: projectLocale.value.DYNAMIC_TP_DESC,
          sponsor: "yanhom",
          date: "2022.04",
          link: `
    <a href="https://gitee.com/dromara/dynamic-tp" rel="nofollow"><img src="https://camo.githubusercontent.com/2f2c380eb34f2cd3ee4cfe409b601cecd484658fcbff85b05a8e06a0b6a0e3a6/68747470733a2f2f67697465652e636f6d2f64726f6d6172612f64796e616d69632d74702f62616467652f737461722e737667" data-canonical-src="https://gitee.com/dromara/dynamic-tp/badge/star.svg" style="max-width: 100%;"></a>
    <a href="https://gitee.com/dromara/dynamic-tp/members" rel="nofollow"><img src="https://camo.githubusercontent.com/c11dc2ac3127c2a1d143ffef39e8bece05f0bead50b7c8877d111848bbbbb063/68747470733a2f2f67697465652e636f6d2f64726f6d6172612f64796e616d69632d74702f62616467652f666f726b2e737667" data-canonical-src="https://gitee.com/dromara/dynamic-tp/badge/fork.svg" style="max-width: 100%;"></a>
    <a href="https://github.com/dromara/dynamic-tp"><img src="https://camo.githubusercontent.com/f2350e0d3cdb7f7481e08908c24eac02cc20d1e6ad8384e1cf8034725ab52ae7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f64726f6d6172612f64796e616d69632d74703f7374796c653d666c61742d737175617265266c6f676f3d676974687562" data-canonical-src="https://img.shields.io/github/stars/dromara/dynamic-tp?style=flat-square&amp;logo=github" style="max-width: 100%;"></a>
    <a href="https://github.com/dromara/dynamic-tp/network/members"><img src="https://camo.githubusercontent.com/8eb939fb984f8593c4f0f5be532cee4aac9680b785875d2699f3e88f55bbd9b6/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f666f726b732f64726f6d6172612f64796e616d69632d74703f7374796c653d666c61742d737175617265266c6f676f3d476974487562" data-canonical-src="https://img.shields.io/github/forks/dromara/dynamic-tp?style=flat-square&amp;logo=GitHub" style="max-width: 100%;"></a>
    <a href="https://github.com/dromara/dynamic-tp/blob/master/LICENSE"><img src="https://camo.githubusercontent.com/2d583aa722731ddad7707bf6d492e88843aba60b1f6a8278396e1c181421d147/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f64726f6d6172612f64796e616d69632d74702e7376673f7374796c653d666c61742d737175617265" data-canonical-src="https://img.shields.io/github/license/dromara/dynamic-tp.svg?style=flat-square" style="max-width: 100%;"></a>
    <a href="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/530709dc29604630b6d1537d7c160ea5~tplv-k3u1fbpfcp-watermark.image" rel="nofollow"><img src="https://camo.githubusercontent.com/be34b66fd0e6b194d1aecea1341b6aeab14fb7b28fdab0649b0f61a25ae3e463/68747470733a2f2f70332d6a75656a696e2e62797465696d672e636f6d2f746f732d636e2d692d6b3375316662706663702f64646661656432636365326134373630386662306330633337356131306630387e74706c762d6b3375316662706663702d7a6f6f6d2d312e696d616765" alt="备注加群" data-canonical-src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddfaed2cce2a47608fb0c0c375a10f08~tplv-k3u1fbpfcp-zoom-1.image" style="max-width: 100%;"></a>
  `
        },
        {
          name: "easy-es",
          website: "https://easy-es.cn/",
          description: projectLocale.value.EASY_ES_DESC,
          sponsor: "elasticsearch（easy-es）",
          date: "2022.03",
          link: `
    <a href="https%3A%2F%2Fsearch.maven.org%2Fsearch%3Fq%3Dg%3Aio.github.xpc1024%2520a%3Aeasy-%2A">
      <img alt="maven" src="https://img.shields.io/github/v/release/xpc1024/easy-es?include_prereleases&amp;logo=xpc&amp;style=plastic">
    </a>
    <a href="https%3A%2F%2Fwww.murphysec.com%2Fdr%2FhtY0sMYDQaDn4X8iXp" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/dromara/easy-es.git.svg?size=small"></a>
    <a href="https%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0">
      <img alt="code style" src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg?style=flat-square">
    </a>
   `
        },
        {
          name: "go-view",
          website: "http://www.mtruning.club:81/",
          description: projectLocale.value.GO_VIEW_DESC,
          sponsor: "奔跑的面条（MTrun）",
          date: "2022.09",
          link: `
  <a href="https://gitee.com/dromara/go-view"><img src="https://gitee.com/dromara/go-view/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/go-view/members"><img src="https://gitee.com/dromara/go-view/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgo-view"><img src="https://img.shields.io/github/stars/dromara/go-view?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgo-view%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/go-view?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgo-view%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/go-view.svg?style=flat-square"></a>
          `
        },
        {
          name: "image-combiner",
          website: "http://dromara.gitee.io/image-combiner",
          description: projectLocale.value.IMAGE_COMBINER_DESC,
          sponsor: "alexzchen",
          date: "2021.03",
          link: `
  <a href="https://gitee.com/dromara/image-combiner"><img src="https://gitee.com/dromara/image-combiner/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/image-combiner/members"><img src="https://gitee.com/dromara/image-combiner/badge/fork.svg"></a>
  `
        },
        {
          name: "jinx",
          website: "https://dromara.org/zh/projects/jinx/overview",
          description: projectLocale.value.JINX_DESC,
          sponsor: "肖宇（yu199195）",
          date: "",
          link: `
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fjinx"><img src="https://img.shields.io/github/stars/dromara/jinx?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fjinx%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/jinx?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fjinx%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/jinx.svg?style=flat-square"></a>
          `
        },
        {
          name: "WeMQ",
          website: "https://wemq.nicholasld.cn/",
          description: projectLocale.value.WEMQ_DESC,
          sponsor: "NicholasLD（nicholasld）",
          date: "2023.09",
          link: `
  <a href="https://gitee.com/dromara/WeMQ"><img src="https://gitee.com/dromara/WeMQ/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/WeMQ/members"><img src="https://gitee.com/dromara/WeMQ/badge/fork.svg"></a>
  <a href="https://github.com/dromara/WeMQ"><img src="https://img.shields.io/github/stars/dromara/WeMQ?style=flat-square&amp;logo=github"></a>
  <a href="https://github.com/dromara/WeMQ/network/members"><img src="https://img.shields.io/github/forks/dromara/WeMQ?style=flat-square&amp;logo=GitHub"></a>
  <a href="https://github.com/dromara/WeMQ/blob/master/LICENSE"><img src="https://img.shields.io/github/license/dromara/WeMQ.svg?style=flat-square"></a>
          `
        },
        {
          name: "X-File-Storage",
          website: "https://x-file-storage.dromara.org/",
          description: projectLocale.value.X_FILE_STORAGE_DESC,
          sponsor: "梦想i（XYW1171736840）",
          date: "2023.09",
          link: `
    <a target="_blank" href="https://central.sonatype.com/search?q=org.dromara.x-file-storage">
        <img src="https://img.shields.io/maven-central/v/org.dromara.x-file-storage/x-file-storage-core.svg?label=Maven%20Central" />
    </a>
    <a target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0">
        <img src="https://img.shields.io/badge/license-Apache%202-green.svg">
    </a>
    <a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">
        <img src="https://img.shields.io/badge/JDK-8+-blue.svg">
    </a>
    <a target="_blank" href="https://github.com/dromara/x-file-storage">
        <img src="https://img.shields.io/github/stars/dromara/x-file-storage.svg?style=social" alt="github star">
    </a>
    <a href="https://gitee.com/dromara/x-file-storage">
        <img src="https://gitee.com/dromara/x-file-storage/badge/star.svg?theme=dark" alt="star">
    </a>
    <a href="https://jq.qq.com/?_wv=1027&amp;k=eGfeNqka">
        <img src="https://img.shields.io/badge/QQ%E7%BE%A4-515706495-orange" alt="">
    </a>
`
        },
        {
          name: "electron-egg",
          website: "https://www.yuque.com/u34495/mivcfg",
          description: projectLocale.value.ELECTRON_EGG_DESC,
          sponsor: "哆啦好梦（wallace530）",
          date: "2022.12",
          link: `
          <a href="https://gitee.com/dromara/electron-egg"><img src="https://gitee.com/dromara/electron-egg/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/electron-egg/members"><img src="https://gitee.com/dromara/electron-egg/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Felectron-egg"><img src="https://img.shields.io/github/stars/dromara/electron-egg?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Felectron-egg%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/electron-egg?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Felectron-egg%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/electron-egg.svg?style=flat-square"></a>
          `
        },
        {
          name: "northstar",
          website: "https://www.quantit.tech/",
          description: projectLocale.value.NORTHSTAR_DESC,
          sponsor: "Huangwl（kevinhuang）",
          date: "2021.07",
          link: `
          <a href="https://gitee.com/dromara/northstar"><img src="https://gitee.com/dromara/northstar/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/northstar/members"><img src="https://gitee.com/dromara/northstar/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fnorthstar"><img src="https://img.shields.io/github/stars/dromara/northstar?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fnorthstar%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/northstar?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fnorthstar%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/northstar.svg?style=flat-square"></a>
          `
        },
        {
          name: "easy_trans",
          website: "http://easy-trans.fhs-opensource.top/",
          description: projectLocale.value.EASY_TRANS_DESC,
          sponsor: "fhs_opensource",
          date: "2023.01",
          link: `
          <a href="https://gitee.com/dromara/easy_trans"><img src="https://gitee.com/dromara/easy_trans/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/easy_trans/members"><img src="https://gitee.com/dromara/easy_trans/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Feasy-es"><img src="https://img.shields.io/github/stars/dromara/easy-es?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Feasy-es%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/easy-es?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Feasy-es%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/easy-es.svg?style=flat-square"></a>
  `
        },
        {
          name: "fast-request",
          website: "https://dromara.org/fast-request",
          description: projectLocale.value.FAST_REQUEST_DESC,
          sponsor: "kings",
          date: "2021.12",
          link: `<a href="https%3A%2F%2Fjoin.slack.com%2Ft%2Frestfulfastrequest%2Fshared_invite%2Fzt-1we57vum8-TALhTHI2uNmPF2bx1NDyWw"><img src="https://img.shields.io/static/v1?label=Slack&amp;message=Restful-Fast-Request&amp;logo=slack&amp;color=38B580" alt="Slack"></a>
  <a href="https%3A%2F%2Ftwitter.com%2FFastRequest666"><img src="https://img.shields.io/static/v1?label=Twitter&amp;message=FastRequest666&amp;logo=twitter&amp;color=FC8D34" alt="twitter"></a>
  <a href="https%3A%2F%2Fplugins.jetbrains.com%2Fplugin%2F16988"><img src="https://img.shields.io/badge/plugin-Restful_Fast_Request-x.svg?logo=IntelliJ%20IDEA" alt="Jetbrains Plugins"></a>
  <img src="https://img.shields.io/jetbrains/plugin/v/16988?logo=IntelliJ%20IDEA" alt="Version">
  <img src="https://img.shields.io/jetbrains/plugin/d/16988?color=FE2857" alt="Downloads">
  <img src="https://img.shields.io/github/license/dromara/fast-request?color=087CFA" alt="GitHub">
  <a href="https%3A%2F%2Ffastrequest.slack.com"><img src="https://img.shields.io/badge/Slack-%23Fast--Request-DD1265?logo=Slack" alt="Slack"></a>
  <a href="https%3A%2F%2Fwww.oscs1024.com%2Fproject%2Fdromara%2Ffast-request%3Fref%3Dbadge_small"><img src="https://www.oscs1024.com/platform/badge/dromara/fast-request.svg?size=small" alt="OSCS Status"></a>`
        },
        {
          name: "redisfront",
          website: "https://www.redisfront.com/",
          description: projectLocale.value.REDISFRONT_DESC,
          sponsor: "westboy",
          date: "2022.12",
          link: `<img src="https://img.shields.io/badge/JDK-17-blue.svg" alt="JDK">
  <img src="https://img.shields.io/badge/Apache-2.0-4green.svg" alt="Apache 2.0">
  <img src="https://img.shields.io/badge/Release-1.0.7-green.svg" alt="Release">`
        },
        {
          name: "x-easypdf",
          website: "http://www.x-easypdf.cn/",
          description: projectLocale.value.X_EASYPDF_DESC,
          sponsor: "xsx（xsxgit）",
          date: "2022.07",
          link: `
          <a href="https://gitee.com/dromara/x-easypdf"><img src="https://gitee.com/dromara/x-easypdf/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/x-easypdf/members"><img src="https://gitee.com/dromara/x-easypdf/badge/fork.svg"></a>
          `
        },
        {
          name: "gobrs-async",
          website: "https://async.sizegang.cn/",
          description: projectLocale.value.GOBRS_ASYNC_DESC,
          sponsor: "Memorydoc",
          date: "2022.06",
          link: `
          <a href="https://gitee.com/dromara/gobrs-async"><img src="https://gitee.com/dromara/gobrs-async/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/gobrs-async/members"><img src="https://gitee.com/dromara/gobrs-async/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgobrs-async"><img src="https://img.shields.io/github/stars/dromara/gobrs-async?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgobrs-async%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/gobrs-async?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgobrs-async%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/gobrs-async.svg?style=flat-square"></a>
          `
        },
        {
          name: "open-giteye-api",
          website: "https://giteye.net/",
          description: projectLocale.value.OPEN_GITEYE_API_DESC,
          sponsor: "公子骏（dt_flys）、铂赛东（bryan31）",
          date: "2021.03",
          link: `
          <a href="https://gitee.com/dromara/open-giteye-api"><img src="https://gitee.com/dromara/open-giteye-api/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/open-giteye-api/members"><img src="https://gitee.com/dromara/open-giteye-api/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fopen-giteye-api"><img src="https://img.shields.io/github/stars/dromara/open-giteye-api?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fopen-giteye-api%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/open-giteye-api?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fopen-giteye-api%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/open-giteye-api.svg?style=flat-square"></a>
          `
        },
        {
          name: "Binlog4j",
          website: "https://gitee.com/dromara/binlog4j",
          description: projectLocale.value.BINLOG4J_DESC,
          sponsor: "就眠儀式（Jmysy）",
          date: "2023.08",
          link: `
      <a href="http%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0.html" target="_blank">
          <img src="http://img.shields.io/:license-apache-brightgreen.svg">
      </a>
      <a href="https%3A%2F%2Fcentral.sonatyper.com%2Fsearch%3Fq%3Dbinlog4j%26smo%3Dtrue" target="_blank">
          <img src="https://img.shields.io/maven-central/v/com.gitee.Jmysy/binlog4j">
      </a>
      <a>
          <img src="https://img.shields.io/badge/JDK-1.8+-green.svg">
      </a>
      <a>
          <img src="https://img.shields.io/badge/springBoot-2.0+-green.svg">
      </a>
      <a>
          <img src="https://img.shields.io/badge/springBoot-3.0+-green.svg">
      </a>
  `
        },
        {
          name: "sms4j",
          website: "https://wind.kim/",
          description: projectLocale.value.SMS4J_DESC,
          sponsor: "风如歌（MR-wind）",
          date: "2023.04",
          link: `
  <a href="https://gitee.com/dromara/sms4j/stargazers"><img src="https://gitee.com/dromara/sms4j/badge/star.svg?theme=gvp"></a>
  <a href="https://gitee.com/dromara/sms4j/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-green"></a>
  <a href="https://gitee.com/dromara/sms4j"><img src="https://img.shields.io/badge/version-v2.2.0-blue"></a>
  `
        },
        {
          name: "stream-query",
          website: "http://stream-query.dromara.org/",
          description: projectLocale.value.STREAM_QUERY_DESC,
          sponsor: "阿超（VampireAchao）",
          date: "2023.03",
          link: `
      <a target="_blank" href="https%3A%2F%2Fsearch.maven.org%2Fartifact%2Forg.dromara.stream-query%2Fstream-query">
          <img src="https://img.shields.io/maven-central/v/org.dromara.stream-query/stream-query.svg?label=Maven%20Central">
      </a>
      <a target="_blank" href="https%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0.html">
          <img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg">
      </a>
      <a target="_blank" href="https://gitee.com/dromara/stream-query">
          <img src="https://gitee.com/dromara/stream-query/badge/star.svg" alt="star">
      </a>
      <a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2Fstream-query">
          <img src="https://img.shields.io/github/stars/dromara/stream-query.svg?style=social" alt="github star">
      </a>
  `
        },
        {
          name: "payment-spring-boot",
          website: "https://felord.gitee.io/payment-spring-boot",
          description: projectLocale.value.PAYMENT_SPRING_BOOT_DESC,
          sponsor: "felord",
          date: "2023.03",
          link: `
<a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2Fpayment-spring-boot%2Fblob%2Frelease%2FLICENSE">
  <img alt="" src="https://img.shields.io/github/license/dromara/payment-spring-boot">
</a>
<a target="_blank" href="https%3A%2F%2Ffelord.cn">
  <img alt="" src="https://img.shields.io/badge/java-8-red">
</a>
<a target="_blank" href="https%3A%2F%2Fspring.io">
  <img alt="" src="https://img.shields.io/badge/spring%20boot-2.4%2B-brightgreen">
</a>
<a target="_blank" href="https%3A%2F%2Fmvnrepository.com%2Fartifact%2Fcn.felord%2Fpayment-spring-boot">
  <img alt="" src="https://img.shields.io/maven-central/v/cn.felord/payment-spring-boot.svg?style=flat-square">
</a>
<a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2Fpayment-spring-boot">
  <img alt="" src="https://img.shields.io/github/stars/dromara/payment-spring-boot?style=social">
</a>
<a target="_blank" href="https%3A%2F%2Fwork.weixin.qq.com%2Fkfid%2Fkfc9d9d759f27f087e1">
  <img alt="点击立即微信咨询" src="https://img.shields.io/badge/%E7%82%B9%E5%87%BB-%E5%BE%AE%E4%BF%A1%E5%92%A8%E8%AF%A2-brightgreen">
</a>
  <a target="_blank" href="https%3A%2F%2Fjq.qq.com%2F%3F_wv%3D1027%26k%3DcCiv8Vlv">
  <img alt="点击加入QQ交流②群" src="https://img.shields.io/badge/QQ%E4%BA%A4%E6%B5%81%E7%BE%A4-549174561-ff69b4">
</a>
  `
        },
        {
          name: "Neutrino-Proxy",
          website: "https://gitee.com/dromara/neutrino-proxy",
          description: projectLocale.value.NEUTRINO_PROXY_DESC,
          sponsor: "傲世孤尘（asgc）",
          date: "2023.01",
          link: `
    <a href="https://gitee.com/dromara/neutrino-proxy/stargazers"><img src="https://gitee.com/dromara/neutrino-proxy/badge/star.svg?theme=dark" alt="star"></a>
  <a href="https://gitee.com/dromara/neutrino-proxy/members"><img src="https://gitee.com/dromara/neutrino-proxy/badge/fork.svg?theme=dark" alt="fork"></a>
  <a target="_blank" href="https%3A%2F%2Fwww.oracle.com%2Fjava%2Ftechnologies%2Fjavase%2Fjavase-jdk8-downloads.html">
      <img src="https://img.shields.io/badge/JDK-8+-red.svg">
  </a>
  <a href="/dromara/neutrino-proxy/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-red" alt="license MIT">
  </a>
  `
        },
        {
          name: "TestHub",
          website: "http://nsrule.com/",
          description: projectLocale.value.TESTHUB_DESC,
          sponsor: "失败女神（failedgoddes）",
          date: "2023.08",
          link: `
  <a href="https://gitee.com/failedgoddess/test-hub/stargazers"><img src="https://gitee.com/failedgoddess/test-hub/badge/star.svg?theme=gvp"></a>
  <a href="https://gitee.com/failedgoddess/test-hub/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-green"></a>
  <a href="https://gitee.com/failedgoddess/test-hub"><img src="https://img.shields.io/badge/version-v1.0.0-blue"></a>
  `
        },
        {
          name: "yft-design",
          website: "https://www.yft.design/",
          description: projectLocale.value.YFT_DESIGN_DESC,
          sponsor: "Nevermore（morestrive）",
          date: "2023.08",
          link: `
  <a href="https://gitee.com/dromara/yft-design"><img src="https://gitee.com/dromara/yft-design/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/yft-design/members"><img src="https://gitee.com/dromara/yft-design/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fyft-design"><img src="https://img.shields.io/github/stars/dromara/yft-design?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fyft-design%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/yft-design?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fyft-design%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/yft-design.svg?style=flat-square"></a>
  `
        },
        {
          name: "zyplayer-doc",
          website: "http://doc.zyplayer.com/",
          description: projectLocale.value.ZYPLAYER_DOC_DESC,
          sponsor: "暮光：城中城（zyplayer）",
          date: "2023.02",
          link: `
          <a href="https://gitee.com/dromara/zyplayer-doc"><img src="https://gitee.com/dromara/zyplayer-doc/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/zyplayer-doc/members"><img src="https://gitee.com/dromara/zyplayer-doc/badge/fork.svg"></a>
          `
        },
        {
          name: "orion-visor",
          website: "https://gitee.com/dromara/orion-visor",
          description: projectLocale.value.ORION_VISOR,
          sponsor: "李佳航（lijiahangmax）",
          date: "2024.03",
          link: `<a
       href="https://app.codacy.com/gh/lijiahangmax/orion-visor/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade">
      <img src="https://app.codacy.com/project/badge/Grade/49eaab3a9a474af3b87e1d21ffec71c4" alt="quality" />
    </a>
    <a
       href="https://www.apache.org/licenses/LICENSE-2.0">
      <img src="https://img.shields.io/github/license/lijiahangmax/orion-visor" alt="License" />
    </a>
    <a
       href="https://github.com/dromara/orion-visor/releases">
      <img src="https://img.shields.io/github/v/release/lijiahangmax/orion-visor" alt="release" />
    </a>
    <a
       href="https://gitee.com/dromara/orion-visor/stargazers">
      <img src="https://gitee.com/dromara/orion-visor/badge/star.svg?theme=gvp" alt="star" />
    </a>
    <a 
       href="https://gitee.com/dromara/orion-visor/members">
      <img src="https://gitee.com/dromara/orion-visor/badge/fork.svg?theme=gvp" alt="fork" />
    </a>
    <a 
       href="https://github.com/dromara/orion-visor">
      <img src="https://img.shields.io/github/stars/lijiahangmax/orion-visor" alt="star" />
    </a>
    <a 
       href="https://github.com/dromara/orion-visor">
      <img src="https://img.shields.io/github/forks/lijiahangmax/orion-visor" alt="star" />
    </a>`
        },
        {
          name: "DyJava",
          website: "https://gitee.com/dromara/dy-java",
          description: projectLocale.value.DYJAVA,
          sponsor: "danmo（sxwdmjy）",
          date: "2024.04",
          link: `<a href="https://gitee.com/dromara/dy-java">
      <img src="https://gitee.com/dromara/dy-java/badge/star.svg" alt="Gitee Stars">
  </a>`
        },
        {
          name: "warm-flow",
          website: "http://warm-flow.cn",
          description: projectLocale.value.WARM_FLOW,
          sponsor: "晓华（min290）",
          date: "2023.12",
          link: `<a href="https://gitee.com/dromara/warm-flow">
      <img src="https://gitee.com/dromara/warm-flow/badge/star.svg" alt="Gitee Stars">
  </a>`
        },
        {
          name: "dbswitch",
          website: "https://gitee.com/dromara/dbswitch",
          description: projectLocale.value.DBSWITCH,
          sponsor: "inrgihc（inrgihc）",
          date: "2020.12",
          link: `<a href="https://gitee.com/dromara/dbswitch">
      <img src="https://gitee.com/dromara/dbswitch/badge/star.svg" alt="Gitee Stars">
  </a>`
        },
        {
          name: "skyeye-oa",
          website: "https://gitee.com/dromara/skyeye",
          description: projectLocale.value.SKYEYE_OA,
          sponsor: "智能制造云办公（doc_wei01_admin）",
          date: "2022.08",
          link: `<a href="https://gitee.com/dromara/skyeye">
      <img src="https://gitee.com/dromara/skyeye/badge/star.svg" alt="Gitee Stars">
  </a>`
        },
        {
          name: "easyAi",
          website: "https://gitee.com/dromara/easyAi",
          description: projectLocale.value.EASYAI,
          sponsor: "唯一解（ldp_dpsmax）",
          date: "2024.05",
          link: `<a href="https://gitee.com/dromara/easyAi">
      <img src="https://gitee.com/dromara/easyAi/badge/star.svg" alt="Gitee Stars">
  </a>`
        },
        {
          name: "mybatis-plus-ext",
          website: "https://gitee.com/dromara/mybatis-plus-ext",
          description: projectLocale.value.MYBATIS_PLUS_EXT,
          sponsor: "唐振超（tangzc）",
          date: "2021.08",
          link: `<a href="https://gitee.com/dromara/mybatis-plus-ext">
      <img src="https://gitee.com/dromara/mybatis-plus-ext/badge/star.svg" alt="Gitee Stars">
      </a>`
        },
        {
          name: "easy-query",
          website: "https://gitee.com/dromara/easy-query",
          description: projectLocale.value.EASY_QUERY,
          sponsor: "薛家明（xuejm）",
          date: "2023.07",
          link: `<a href="https://gitee.com/dromara/easy-query">
      <img src="https://gitee.com/dromara/easy-query/badge/star.svg" alt="Gitee Stars">
      </a>
      <a target="_blank" href="https://central.sonatype.com/search?q=easy-query">
        <img src="https://img.shields.io/maven-central/v/com.easy-query/easy-query-all?label=Maven%20Central" alt="Maven" />
    </a>
    <a target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0.txt"><img src="https://img.shields.io/:license-Apache2-blue.svg" alt="Apache 2" /></a>
    <a target="_blank" href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"><img src="https://img.shields.io/badge/JDK-8-green.svg" alt="jdk-8" /></a>
    <a target="_blank" href="https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html"><img src="https://img.shields.io/badge/JDK-11-green.svg" alt="jdk-11" /></a>
    <a target="_blank" href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"><img src="https://img.shields.io/badge/JDK-17-green.svg" alt="jdk-17" /></a>`
        },
        {
          name: "tianai-captcha",
          website: "https://gitee.com/dromara/tianai-captcha",
          description: projectLocale.value.TIANAI_CAPTCHA,
          sponsor: "天爱有情（tianai）",
          date: "2022.01",
          link: `<a href="https://gitee.com/dromara/tianai-captcha">
      <img src="https://gitee.com/dromara/tianai-captcha/badge/star.svg" alt="Gitee Stars">
      </a>
      `
        },
        {
          name: "dax-pay",
          website: "https://gitee.com/dromara/dax-pay",
          description: projectLocale.value.DAX_PAY,
          sponsor: "喵呀（GIotEE）",
          date: "2023.07",
          link: `
       <img src="https://img.shields.io/github/stars/dromara/dax-pay?style=flat&label=Github">
 <img src='https://gitee.com/bootx/dax-pay/badge/star.svg?theme=dark' alt='star'/>
 <img src="https://img.shields.io/badge/Dax%20Pay-2.0.8-success.svg" alt="Build Status"/>
 <img src="https://img.shields.io/badge/Author-Daxpay-orange.svg" alt="Build Status"/>
 <img src="https://img.shields.io/badge/Spring%20Boot-2.7.18-blue.svg" alt="Downloads"/>
 <img src="https://img.shields.io/badge/license-Apache%20License%202.0-green.svg"/>
      `
        },
        {
          name: "mayfly-go",
          website: "https://gitee.com/dromara/mayfly-go",
          description: projectLocale.value.MYFLY_GO,
          sponsor: "Coder慌（objs）",
          date: "2022.05",
          link: `<a href="https://gitee.com/dromara/mayfly-go" target="_blank">
    <img src="https://gitee.com/dromara/mayfly-go/badge/star.svg?theme=white" alt="star"/>
    <img src="https://gitee.com/dromara/mayfly-go/badge/fork.svg" alt="fork"/>
  </a>
  <a href="https://github.com/dromara/mayfly-go" target="_blank">
    <img src="https://img.shields.io/github/stars/dromara/mayfly-go.svg?style=social" alt="github star"/>
    <img src="https://img.shields.io/github/forks/dromara/mayfly-go.svg?style=social" alt="github fork"/>
  </a>
  <a href="https://hub.docker.com/r/mayflygo/mayfly-go/tags" target="_blank">
    <img src="https://img.shields.io/docker/pulls/mayflygo/mayfly-go.svg?label=docker%20pulls&color=fac858" alt="docker pulls"/>
  </a>
  <a href="https://github.com/golang/go" target="_blank">
    <img src="https://img.shields.io/badge/Golang-1.22%2B-yellow.svg" alt="golang"/>
  </a>
  <a href="https://cn.vuejs.org" target="_blank">
    <img src="https://img.shields.io/badge/Vue-3.x-green.svg" alt="vue">
  </a>
      `
        },
        {
          name: "MilvusPlus",
          website: "https://milvus.cn/",
          description: projectLocale.value.MILVUSPLUS,
          sponsor: "xgc（giteeClass）",
          date: "2024.05",
          link: `<a href="https://gitee.com/dromara/MilvusPlus">
      <img src="https://gitee.com/dromara/MilvusPlus/badge/star.svg" alt="Gitee Stars">
      </a>
      `
        },
        {
          name: "newcar",
          website: "https://gitee.com/dromara/newcar",
          description: projectLocale.value.NEWCAR,
          sponsor: "Acbox（drwave）",
          date: "2023.02",
          link: `  <img src="https://img.shields.io/github/stars/dromara/newcar?color=yellowgreen&logo=github&style=flat-square" />
  <img src="https://img.shields.io/github/forks/dromara/newcar?logo=github&style=flat-square" />
  <img src="https://img.shields.io/github/license/Bug-Duck/newcar?color=skyblue&logo=github&style=flat-square" />
  <a href="https://twitter.com/bugduckteam"><img src="https://shields.io/badge/twitter-BugDuck_Team-blue?logo=twitter&style=flat-square" /></a>
  <a href="https://discord.gg/ANqgRc3C4b"><img src="https://shields.io/badge/discord-newcarjs-blue?logo=discord&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/newcar"><img src="https://img.shields.io/npm/dw/newcar.svg"/></a>
  <a href="https://www.npmjs.com/package/newcar"><img src="https://img.shields.io/npm/v/newcar.svg"/></a>
      `
        },
        {
          name: "ujcms",
          website: "https://gitee.com/dromara/ujcms",
          description: projectLocale.value.UJCMS,
          sponsor: "ujcms（ujcms）",
          date: "2024.04",
          link: `<a href="https://gitee.com/dromara/ujcms">
      <img src="https://gitee.com/dromara/ujcms/badge/star.svg" alt="Gitee Stars">
      </a>
      `
        },
        {
          name: "sayOrder",
          website: "https://gitee.com/dromara/sayOrder",
          description: projectLocale.value.SAYORDER,
          sponsor: "唯一解（ldp_dpsmax）",
          date: "2024.03",
          link: `<a href="https://gitee.com/dromara/sayOrder">
      <img src="https://gitee.com/dromara/sayOrder/badge/star.svg" alt="Gitee Stars">
      </a>
      `
        },
        {
          name: "Akali",
          website: "https://akali.yomahub.com",
          description: projectLocale.value.AKALI,
          sponsor: "铂赛东（bryan31）",
          date: "2023.11",
          link: `<a href="https://gitee.com/dromara/Akali">
      <img src="https://gitee.com/dromara/Akali/badge/star.svg" alt="Gitee Stars">
      </a>
      `
        },
        {
          name: "carbon",
          website: "https://gitee.com/dromara/carbon",
          description: projectLocale.value.CARBON_DESC,
          sponsor: "勾国印（gouguoyin）",
          date: "2024.10",
          link: `

<a href='https://gitee.com/dromara/carbon/stargazers'><img src='https://gitee.com/dromara/carbon/badge/star.svg?theme=gvp' alt='star'></img></a>
  <a href="https://github.com/dromara/carbon"><img src="https://img.shields.io/github/stars/dromara/carbon.svg?style=social&amp;label=Stars" alt="GitHub"></a>
<a target="_blank" href="https://github.com/dromara/carbon/releases">
  <img src="https://img.shields.io/github/release/dromara/carbon.svg">
</a>
<a target="_blank" href="https://github.com/dromara/carbon/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/dromara/carbon">
</a>`
        }
      ]
    },
    {
      groupName: projectLocale.value.ENTERPRISE_CERTIFICATION,
      projects: [
        {
          name: "sa-token",
          website: "http://sa-token.dev33.cn/",
          description: projectLocale.value.SA_TOKEN_DESC,
          sponsor: "刘潇（click33）",
          date: "2021.03",
          link: `
<a href="https://gitee.com/dromara/sa-token/stargazers"><img src="https://gitee.com/dromara/sa-token/badge/star.svg?theme=gvp"></a>
<a href="https://gitee.com/dromara/sa-token/members"><img src="https://gitee.com/dromara/sa-token/badge/fork.svg?theme=gvp"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fsa-token%2Fstargazers"><img src="https://img.shields.io/github/stars/dromara/sa-token?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fsa-token%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/sa-token?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fsa-token%2Fwatchers"><img src="https://img.shields.io/github/watchers/dromara/sa-token?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fsa-token%2Fissues"><img src="https://img.shields.io/github/issues/dromara/sa-token.svg?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fsa-token%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/sa-token.svg?style=flat-square"></a>
`
        },
        {
          name: "MaxKey",
          website: "https://maxkey.top/",
          description: projectLocale.value.MAXKEY_DESC,
          sponsor: "MaxKeyTop（maxkeytop_admin）",
          date: "2021.03",
          link: `
      <a target="_blank" href="http%3A%2F%2Fwww.maxkey.top%2Fzh%2Fabout%2Fdownload.html">
          <img src="https://img.shields.io/github/v/release/dromara/MaxKey">
      </a>
      <a target="_blank" href="https%3A%2F%2Fwww.oracle.com%2Fjava%2Ftechnologies%2Fdownloads%2F">
          <img src="https://img.shields.io/badge/JDK-v17%2B-brightgreen">
      </a>
      <a target="_blank" href="https%3A%2F%2Fwww.mysql.com%2F">
          <img src="https://img.shields.io/badge/MySQL-8.0.12%2B-brightgreen">
      </a>
      <a target="_blank" href="http%3A%2F%2Fwww.maxkey.top%2Fzh%2Fabout%2Flicenses.html">
          <img src="https://img.shields.io/github/license/dromara/MaxKey">
      </a>
  `
        },
        {
          name: "sureness",
          website: "https://dromara.org/sureness",
          description: projectLocale.value.SURENESS_DESC,
          sponsor: "tomsun28",
          date: "2021.05",
          link: `<a href="https%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0.html"><img src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg" alt="License"></a>
  <a href="https%3A%2F%2Fsearch.maven.org%2Fartifact%2Fcom.usthe.sureness%2Fsureness-core"><img src="https://img.shields.io/badge/Maven%20Central-1.0.5-blue.svg" alt="Maven"></a>
  <img src="https://img.shields.io/github/status/contexts/pulls/dromara/sureness/8?label=pull%20checks" alt="GitHub pull request check contexts">
  <a href="https%3A%2F%2Fgitter.im%2Fusthe%2Fsureness"><img src="https://img.shields.io/gitter/room/usthe/sureness?label=sureness&amp;color=orange&amp;logo=gitter&amp;logoColor=red" alt="Gitter"></a>
  <img src="https://img.shields.io/github/release-date/dromara/sureness?color=blue&amp;logo=figshare&amp;logoColor=red" alt="GitHub Release Date">
  <a href="https://gitee.com/dromara/sureness/stargazers"><img src="https://gitee.com/dromara/sureness/badge/star.svg?theme=gray" alt="star"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fsureness"><img src="https://img.shields.io/github/stars/dromara/sureness?style=social" alt="star"></a>`
        }
      ]
    },
    {
      groupName: projectLocale.value.OPERATIONS_AND_MAINTENANCE_CONTROL,
      projects: [
        {
          name: "Jpom",
          website: "https://jpom.top/",
          description: projectLocale.value.JPOM_DESC,
          sponsor: "蒋小小（bwcx-jzy）",
          date: "2021.03",
          link: `
      <a target="_blank" href="https://gitee.com/dromara/Jpom">
      <img src="https://gitee.com/dromara/Jpom/badge/star.svg?theme=gvp" alt="gitee star">
  </a>
<a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2FJpom">
  <img src="https://img.shields.io/github/stars/dromara/Jpom.svg?style=social" alt="github star">
  </a>
  <a target="_blank" href="https://gitee.com/dromara/Jpom">
      <img src="https://img.shields.io/github/license/dromara/Jpom?style=flat" alt="license">
  </a>
  <a target="_blank" href="https://gitee.com/dromara/Jpom">
      <img src="https://img.shields.io/badge/JDK-1.8.0_40+-green.svg" alt="jdk">
  </a>
  <a target="_blank" href="https%3A%2F%2Fwww.codacy.com%2Fgh%2Fdromara%2FJpom%2Fdashboard%3Futm_source%3Dgithub.com%26utm_medium%3Dreferral%26utm_content%3Ddromara%2FJpom%26utm_campaign%3DBadge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/843b953f1446449c9a075e44ea778336" alt="codacy">
  </a>
<a target="_blank" href="https%3A%2F%2Fjpom.top%2Fpages%2Fpraise%2Fjoin%2F">
  <img src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E7%BE%A4(%E8%AF%B7%E5%A4%87%E6%B3%A8%3AJpom)-jpom66-yellowgreen.svg" alt="jpom66 请备注jpom">
</a>
  <a target="_blank" href="https%3A%2F%2Fjpom.top%2Fpages%2Fchangelog%2Fnew%2F">
  <img src="https://img.shields.io/github/v/release/dromara/Jpom.svg" alt="docker pull">
  </a>
  <a target="_blank" href="https%3A%2F%2Fhub.docker.com%2Frepository%2Fdocker%2Fjpomdocker%2Fjpom">
  <img src="https://img.shields.io/docker/pulls/jpomdocker/jpom.svg" alt="docker pull">
  </a>
          `
        },
        {
          name: "cubic",
          website: "https://cubic.jiagoujishu.com/",
          description: projectLocale.value.CUBIC_DESC,
          sponsor: "QIANGLU（qianglu）",
          date: "2021.03",
          link: `<a href="https://gitee.com/dromara/cubic"><img src="https://gitee.com/dromara/cubic/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/cubic/members"><img src="https://gitee.com/dromara/cubic/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fcubic"><img src="https://img.shields.io/github/stars/dromara/cubic?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fcubic%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/cubic?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fcubic%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/cubic.svg?style=flat-square"></a>
  `
        },
        {
          name: "athena",
          website: "https://dromara.org/zh/projects/raincat/overview/",
          description: projectLocale.value.ATHENA_DESC,
          sponsor: "肖宇（yu199195）",
          date: "",
          link: `
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fathena"><img src="https://img.shields.io/github/stars/dromara/athena?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fathena%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/athena?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fathena%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/athena.svg?style=flat-square"></a>
          `
        },
        {
          name: "TestHub",
          website: "http://nsrule.com/",
          description: projectLocale.value.TESTHUB_DESC,
          sponsor: "失败女神（failedgoddes）",
          date: "2023.08",
          link: `
  <a href="https://gitee.com/failedgoddess/test-hub/stargazers"><img src="https://gitee.com/failedgoddess/test-hub/badge/star.svg?theme=gvp"></a>
  <a href="https://gitee.com/failedgoddess/test-hub/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-green"></a>
  <a href="https://gitee.com/failedgoddess/test-hub"><img src="https://img.shields.io/badge/version-v1.0.0-blue"></a>
  `
        },
        {
          name: "domain-admin",
          website: "https://domain-admin.cn/",
          description: projectLocale.value.DOMAIN_ADMIN_DESC,
          sponsor: "mouday",
          date: "2024.08",
          link: `
  <img src="https://img.shields.io/github/stars/dromara/domain-admin.svg?logo=GitHub" alt="">
  `
        }
      ]
    },
    {
      groupName: projectLocale.value.DISTRIBUTED_LOG,
      projects: [
        {
          name: "TLog",
          website: "https://yomahub.com/tlog/",
          description: projectLocale.value.TLOG_DESC,
          sponsor: "铂赛东（bryan31）",
          date: "2021.03",
          link: `
          <a href="https://gitee.com/dromara/TLog"><img src="https://gitee.com/dromara/TLog/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/TLog/members"><img src="https://gitee.com/dromara/TLog/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FTLog"><img src="https://img.shields.io/github/stars/dromara/TLog?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FTLog%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/TLog?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FTLog%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/TLog.svg?style=flat-square"></a>
          `
        }
      ]
    },
    {
      groupName: projectLocale.value.BIG_DATA,
      projects: [
        {
          name: "CloudEon",
          website: "http://www.cloudeon.top/",
          description: projectLocale.value.CLOUDEON_DESC,
          sponsor: "Pandas886",
          date: "2023.04",
          link: `<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FCloudEon"><img src="https://views.whatilearened.today/views/github/dromara/CloudEon.svg" alt="HitCount"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FCloudEon%2Fcommits%2Fmain"><img src="https://img.shields.io/github/commit-activity/m/dromara/CloudEon?color=ffff00" alt="Commits"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fpre-commit%2Fpre-commit"><img src="https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit" alt="pre-commit"></a>
  <a href="#contributors-"><img src="https://img.shields.io/github/all-contributors/dromara/CloudEon" alt="All Contributors"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FCloudEon%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/CloudEon" alt="GitHub license"></a>`
        },
        {
          name: "data-compare",
          website:
            "https://blog.csdn.net/weixin_43291055/article/details/128393823?spm=1001.2014.3001.5502",
          description: projectLocale.value.DATA_COMPARE_DESC,
          sponsor: "诸葛子房（ZhuGeZiFang）",
          date: "2023.03",
          link: `
  <img src="https://gitee.com/ZhuGeZiFang/data-compare/badge/star.svg" alt="">
  <img src="https://gitee.com/ZhuGeZiFang/data-compare/badge/fork.svg?theme=gvp" alt="">
  <img src="https://img.shields.io/github/stars/zhugezifang/dataCompare.svg?logo=GitHub" alt="">
  <img src="https://img.shields.io/github/forks/zhugezifang/dataCompare.svg?logo=GitHub" alt="">
  <img src="https://img.shields.io/github/watchers/zhugezifang/dataCompare.svg?logo=GitHub" alt="">
  <img src="https://img.shields.io/github/license/zhugezifang/dataCompare.svg" alt="">
  <img src="https://img.shields.io/github/v/release/zhugezifang/dataCompare?label=latest&amp;style=flat-square" alt="">`
        }
      ]
    },
    {
      groupName: projectLocale.value.MICROSERVICE,
      projects: [
        {
          name: "koalas-rpc",
          website: "https://github.com/dromara/koalas-rpc",
          description: projectLocale.value.KOALAS_RPC_DESC,
          sponsor: "张玉龙（a12345678）",
          date: "2021.06",
          link: `
          <a href="https%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0" align="center">
      <img alt="code style" src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg?style=flat-square">
    </a>
    <a href="https%3A%2F%2Fgithub.com%2F996icu%2F996.ICU%2Fblob%2Fmaster%2FLICENSE" align="center">
      <img alt="996icu" src="https://img.shields.io/badge/license-NPL%20(The%20996%20Prohibited%20License)-blue.svg">
    </a>
  `
        },
        {
          name: "mendmix",
          website: "https://www.jeesuite.com/",
          description: projectLocale.value.MENDMIX_DESC,
          sponsor: "vakinge",
          date: "2022.05",
          link: `
          <a href="https://gitee.com/dromara/mendmix"><img src="https://gitee.com/dromara/mendmix/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/mendmix/members"><img src="https://gitee.com/dromara/mendmix/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fmendmix"><img src="https://img.shields.io/github/stars/dromara/mendmix?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fmendmix%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/mendmix?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fmendmix%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/mendmix.svg?style=flat-square"></a>
          `
        },
        {
          name: "lamp-cloud",
          website: "https://tangyh.top/",
          description: projectLocale.value.LAMP_CLOUD_DESC,
          sponsor: "最后（zuihou111）",
          date: "2022.11",
          link: `
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud"><img src="https://img.shields.io/badge/%E8%AF%AD%E8%A8%80-Java%20%7C%20SpringCloud%20%7C%20Vue3%20%7C%20...-red?style=flat-square&amp;color=42b883" alt="Language"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/lamp-cloud?color=42b883&amp;style=flat-square" alt="License"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fzuihou"><img src="https://img.shields.io/badge/%E4%BD%9C%E8%80%85-zuihou-orange.svg" alt="Author"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud"><img src="https://img.shields.io/badge/%E7%89%88%E6%9C%AC-3.10.0-brightgreen.svg" alt="Version"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud%2Fstargazers"><img src="https://img.shields.io/github/stars/dromara/lamp-cloud?color=42b883&amp;logo=github&amp;style=flat-square" alt="Star"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/lamp-cloud?color=42b883&amp;logo=github&amp;style=flat-square" alt="Fork"></a>
  <a href="https://gitee.com/dromara/lamp-cloud/stargazers"><img src="https://gitee.com/dromara/lamp-cloud/badge/star.svg?theme=gray" alt="Star"></a>
  <a href="https://gitee.com/dromara/lamp-cloud/members"><img src="https://gitee.com/dromara/lamp-cloud/badge/fork.svg?theme=gray" alt="Fork"></a>
  `
        },
        {
          name: "dante-cloud",
          website: "https://www.herodotus.cn/",
          description: projectLocale.value.DANTE_CLOUD_DESC,
          sponsor: "码匠君（herodotus）",
          date: "2022.08",
          link: `
      <a href="#" target="_blank"><img src="https://img.shields.io/badge/Version-3.1.3.5-red.svg?logo=spring" alt="Version 3.1.3.5"></a>
      <a href="https://gitee.com/herodotus/dante-engine" target="_blank"><img src="https://img.shields.io/badge/Dante%20Engine-3.1.3.5-red.svg?logo=spring" alt="Dante Engine 3.1.3.5"></a>
      <a href="https://gitee.com/herodotus/dante-oss" target="_blank"><img src="https://img.shields.io/badge/Dante%20OSS-3.1.3.5-red.svg?logo=spring" alt="Dante OSS 3.1.3.5"></a>
      <a href="https%3A%2F%2Fbell-sw.com%2Fpages%2Fdownloads%2F%23downloads" target="_blank"><img src="https://img.shields.io/badge/JDK-17%2B-green.svg?logo=openjdk" alt="Java 17"></a>
      <a href="/dromara/dante-cloud/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-Apache--2.0-blue.svg?logo=apache" alt="License Apache 2.0"></a>
      <a href="https%3A%2F%2Fblog.csdn.net%2FPointer_v" target="_blank"><img src="https://img.shields.io/badge/Author-%E7%A0%81%E5%8C%A0%E5%90%9B-orange" alt="码匠君"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img src="https://img.shields.io/github/stars/herodotus-cloud/dante-cloud?style=flat&amp;logo=github" alt="Github star"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img src="https://img.shields.io/github/forks/herodotus-cloud/dante-cloud?style=flat&amp;logo=github" alt="Github fork"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img src="https://gitee.com/dromara/dante-cloud/badge/star.svg?theme=dark" alt="Gitee star"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img src="https://gitee.com/dromara/dante-cloud/badge/fork.svg?theme=dark" alt="Gitee fork"></a>
  `
        },
        {
          name: "open-capacity-platform",
          website: "https://gitee.com/dromara/open-capacity-platform/",
          description: projectLocale.value.OPEN_CAPACITY_PLATFORM_DESC,
          sponsor: "owen（jeecp）",
          date: "2023.01",
          link: `
   <img src="https://img.shields.io/badge/buildi%20-success-green.svg" alt="Build Status">
   <img src="https://img.shields.io/badge/easyweb%20-green.svg" alt="es">
   <img src="https://img.shields.io/badge/elasticsearch%20-6.5.4-green.svg" alt="es">
   <img src="https://img.shields.io/badge/Spring%20Boot-2.6.3-blue.svg" alt="sb">
   <img src="https://img.shields.io/badge/Spring%20Cloud-2021.0.5-blue.svg" alt="sc">
   <img src="https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2021.0.4.0-blue.svg" alt="sc">
   <a href="https://gitee.com/owenwangwen/open-capacity-platform/stargazers"><img src="https://gitee.com/owenwangwen/open-capacity-platform/badge/star.svg?theme=white" alt="star"></a>
  <a href="https://gitee.com/owenwangwen/open-capacity-platform"><img src="https://gitee.com/owenwangwen/open-capacity-platform/widgets/widget_6.svg" alt="Fork me on Gitee"></a>
  <a href="https://gitee.com/owenwangwen/open-capacity-platform/members"><img src="https://gitee.com/owenwangwen/open-capacity-platform/badge/fork.svg?theme=white" alt="fork"></a>
  `
        },
        {
          name: "RuoYi-Vue-Plus",
          website: "https://plus-doc.dromara.org/",
          description: projectLocale.value.RUOYI_VUE_PLUS_DESC,
          sponsor: "疯狂的狮子Li（JavaLionLi）",
          date: "2023.04",
          link: `
  <a href="https://gitee.com/dromara/RuoYi-Vue-Plus"><img src="https://gitee.com/dromara/RuoYi-Vue-Plus/badge/star.svg?theme=blue" alt="码云Gitee"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FRuoYi-Vue-Plus"><img src="https://img.shields.io/github/stars/JavaLionLi/RuoYi-Vue-Plus.svg?style=social&amp;label=Stars" alt="GitHub"></a>
  <a href="https://gitee.com/dromara/RuoYi-Vue-Plus/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
  <a href="https%3A%2F%2Fwww.jetbrains.com%2F%3Ffrom%3DRuoYi-Vue-Plus"><img src="https://img.shields.io/badge/IntelliJ%20IDEA-%E6%8F%90%E4%BE%9B%E6%94%AF%E6%8C%81-blue.svg" alt="使用IntelliJ IDEA开发维护"></a>
  <br>
  <a href="https://gitee.com/dromara/RuoYi-Vue-Plus"><img src="https://img.shields.io/badge/RuoYi_Vue_Plus-4.8.0-success.svg" alt="RuoYi-Vue-Plus"></a>
  <a href=""><img src="https://img.shields.io/badge/Spring%20Boot-2.7-blue.svg" alt="Spring Boot"></a>
  <a href=""><img src="https://img.shields.io/badge/JDK-8-green.svg" alt="JDK-8+"></a>
  <a href=""><img src="https://img.shields.io/badge/JDK-11-green.svg" alt="JDK-11"></a>`
        },
        {
          name: "J2EEFAST",
          website: "http://www.j2eefast.com/",
          description: projectLocale.value.J2EEFAST_DESC,
          sponsor: "周周（zhouhuanOGP）",
          date: "2023.03",
          link: `
  <img src="https://img.shields.io/badge/%E9%AB%98%E6%95%88-%E5%BF%AB%E9%80%9F-brightgreen">
  <img src="https://img.shields.io/badge/%E5%AE%89%E5%85%A8-%E6%BA%90%E7%A0%81%E5%8F%AF%E6%8E%A7-blueviolet">
  <a href="https%3A%2F%2Fjq.qq.com%2F%3F_wv%3D1027%26k%3D5xTlnN6" target="_blank"><img src="https://img.shields.io/badge/QQ%E6%8A%80%E6%9C%AF%E7%BE%A4-805468934-orange"></a>
  `
        }
      ]
    },
    {
      groupName: projectLocale.value.DISTRIBUTED_SCHEDULING,
      projects: [
        {
          name: "hodor",
          website: "https://dromara.org/zh/projects/hodor/overview",
          description: projectLocale.value.HODOR_DESC,
          sponsor: "tincopper（tomgs）",
          date: "2023.04",
          link: `
        <a href="https://gitee.com/dromara/hodor"><img src="https://gitee.com/dromara/hodor/badge/star.svg"></a>
<a href="https://gitee.com/dromara/hodor/members"><img src="https://gitee.com/dromara/hodor/badge/fork.svg"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fhodor"><img src="https://img.shields.io/github/stars/dromara/hodor?style=flat-square&amp;logo=github"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fhodor%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/hodor?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fhodor%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/hodor.svg?style=flat-square"></a>
        `
        },
        {
          name: "Disjob",
          website: "http://ponfee.cn:8000/login",
          description: projectLocale.value.DISJOB_DESC,
          sponsor: "ponfee（fupengfei）",
          date: "2023.08",
          link: `
        <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fdisjob%2Factions"><img src="https://github.com/dromara/disjob/workflows/build/badge.svg" alt="Build status"></a>
        <a href="https://gitee.com/dromara/Disjob"><img src="https://gitee.com/dromara/Disjob/badge/star.svg"></a>
<a href="https://gitee.com/dromara/Disjob/members"><img src="https://gitee.com/dromara/Disjob/badge/fork.svg"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FDisjob"><img src="https://img.shields.io/github/stars/dromara/Disjob?style=flat-square&amp;logo=github"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FDisjob%2Fnetwork%2Fmembers"><img src="https://img.shields.io/github/forks/dromara/Disjob?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FDisjob%2Fblob%2Fmaster%2FLICENSE"><img src="https://img.shields.io/github/license/dromara/Disjob.svg?style=flat-square"></a>
`
        }
      ]
    }
  ]);

  const projectItems = computed(() =>
    orderProjects(projectItemsOrigin.value, projectOrder.value)
  );

  return { projectItems, projectLocale };
};
