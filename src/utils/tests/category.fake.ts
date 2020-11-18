import Category from '../../category/entities/category.entity'
export default class FakeCategory {

  static getCategory (): Category {
    const category = new Category
    category.id = '1'
    category.name = 'any Category'
    return category
  }
}
