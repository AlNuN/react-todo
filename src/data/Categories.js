export default class Categories {
  constructor() {
    this.categories = [];
    this.subscribed = [];
  }

  subscribe(func) {
    this.subscribed.push(func);
  }

  unsubscribe(func) {
    this.subscribed = this.subscribed.filter((f) => f !== func);
  }

  notify(){
    this.subscribed.forEach((func) => func(this.categories));
  }

  addCategory(newCategory) {
    this.categories.push(newCategory);
    this.notify();
  }
}