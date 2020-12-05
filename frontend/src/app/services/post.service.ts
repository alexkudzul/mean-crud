import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Para comunicar con la API
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  readonly URL_API = 'http://localhost:3000/api/posts';

  // instanciar el HttpClient
  constructor(private _http: HttpClient) { }

  getPosts(): Observable<any> {
    return this._http.get(this.URL_API);
  }

  postPost(post: Post) {
    return this._http.post(this.URL_API, post);
  }

  putPost(post: Post) {
    // recibe 2 parametros la URL + el id del Post y los nuevos datos de Post
    return this._http.put(this.URL_API + `/${post._id}`, post);
  }

  deletePost(_id: string) {
    return this._http.delete(this.URL_API + `/${_id}`);
  }
}





// ------------------------------------- V2 ------------------------------------------


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; // Para comunicar con la API
// import { Post } from '../models/post';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   selectedPost: Post; // Selecciona el modelo Post
//   posts: Post[]; // almacena los datos devueltos de cada Post

//   readonly URL_API = 'http://localhost:3000/api/posts';

//   // instanciar el HttpClient
//   constructor(private http: HttpClient) {
//     this.selectedPost = new Post();
//   }

//   getPosts(){
//     return this.http.get(this.URL_API);
//   }

//   postPost(Post: Post){
//     return this.http.post(this.URL_API, Post);
//   }

//   putPost(post: Post){
//     // recibe 2 parametros la URL + el id del Post y los nuevos datos de Post
//     return this.http.put(this.URL_API + `/${post._id}`, post);
//   }

//   deletePost(_id: string){
//     return this.http.delete(this.URL_API + `/${_id}`);
//   }
// }
