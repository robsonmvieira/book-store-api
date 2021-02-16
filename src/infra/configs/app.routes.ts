const publishersRoot = '/publishers'
const categoryRoot = '/categories'
const bookRoot = '/books'

export const routes = {
  category: {
    root: categoryRoot,
    findOne: `${categoryRoot}/:id`,
    update: `${categoryRoot}/:id`,
    remove: `${categoryRoot}/:id`
  },
  publisher: {
    root: publishersRoot,
    findOne: `${publishersRoot}/:id`,
    update: `${publishersRoot}/:id`,
    remove: `${publishersRoot}/:id`
  },
  book: {
    root: bookRoot,
    findOne: `${bookRoot}/:id`,
    update: `${bookRoot}/:id`,
    remove: `${bookRoot}/:id`
  }


}
