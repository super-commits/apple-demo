import { action, computed, makeObservable, observable } from 'mobx'

class AppleStore {
  apples = []
  delAppleCount = 0
  delAppleWeight = 0
  constructor() {
    makeObservable(this, {
      apples: observable,
      addApple: action.bound,
      delApple: action,
      addWeightTotal: computed,
      delAppleCount: observable,
      delAppleWeight: observable
    })
  }
  addApple() {
    this.apples.push({
      num: Math.ceil(Math.random() * 100),
      weight: Math.ceil(Math.random() * 1000)
    })
  }
  delApple(index) {
    this.delAppleCount += 1
    this.delAppleWeight += this.apples[index].weight
    this.apples.splice(index, 1)
  }
  get addWeightTotal() {
    return this.apples.reduce((prev, curr) => {
      return prev + curr.weight
    }, 0)
  }
}

export default AppleStore