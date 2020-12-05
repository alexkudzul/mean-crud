export class Post {

  constructor(_id = '', title = '', excerpt = '', content = '', category = '') {
    this._id = _id;
    this.title = title;
    this.excerpt = excerpt;
    this.content = content;
    this.category = category;
  }
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
}
