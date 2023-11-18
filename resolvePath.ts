import { resolvePathSync } from 'mlly'
import { resolve } from 'path'
import '@arco-design/web-vue'
// module "/home/wiidede/mlly-arco/node_modules/.pnpm/@arco-design+web-vue@2.53.2_vue@3.3.8/node_modules/@arco-design/web-vue/es/index"


console.log(resolvePathSync('@arco-design/web-vue'))
// /home/wiidede/mlly-arco/node_modules/.pnpm/@arco-design+web-vue@2.53.2_vue@3.3.8/node_modules/@arco-design/web-vue/lib/index.js
console.log(resolve('@arco-design/web-vue'))

/* package config in mlly(local env):

{
  pjsonPath: "/Users/wangziyu/github/nuxt/playground/node_modules/@arco-design/web-vue/package.json",
  exists: true,
  main: "lib/index.js",
  name: "@arco-design/web-vue",
  type: "none",
  exports: undefined,
  imports: undefined,
}

*/
