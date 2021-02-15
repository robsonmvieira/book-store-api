const publishersRoot = '/publishers'
const categoryRoot = '/categories'

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


}
