// 导入所有的svg
// 完成svg的全局注册
// https://webpack.docschina.org/guides/dependency-management/
import SvgIcon from '@/components/SvgIcon'
const svgRequire = require.context('./svg', false, /\.svg$/)
// 返回了require函数
console.log(svgRequire.keys())
svgRequire.keys().forEach(svgIcon => svgRequire(svgIcon))

export default app => {
  app.component('svg-icon', SvgIcon)
}
