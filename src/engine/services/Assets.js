class AssetsService {
  constructor() {
    this.assets = {}
    this.assetsPromises = []
  }

  _register(url) {
    const promisedAsset = new Promise(resolve => {
      const extension = url.split('.').pop()

      if (['jpg', 'png'].includes(extension)) {
        const asset = new Image()
        asset.onload = resolve
        this.assets[url] = asset
      } else throw new Error('Asset type is not supported')
    })

    this.assetsPromises.push(promisedAsset)
  }

  register(url) {
    const urls = [].concat(url)
    urls.forEach(url => {
      if (!this.assets[url]) {
        this._register(url)
      }
    })
  }

  get(url) {
    return this.assets[url]
  }

  $$loadAll() {
    return Promise.all(this.assetsPromises)
  }
}

export const Assets = new AssetsService()
