/**
 *  Created by daiwenjuan on 2018/7/4 22:26.
 */
class Singleton {
  constructor() {
    this.instance = null
    this.plugins = []
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance
  }

  setPlugin(plugin) {
    this.plugins.push(plugin)
  }

  getPlugins() {
    return this.plugins
  }

}

module.exports = Singleton