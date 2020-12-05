import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';

// Variable para trabajar con los mensajes toast de materialize
declare var M: any;

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {

  public newPost: Post; // crea un nuevo Post
  public allPosts: Post[]; // almacena todo los posts

  constructor(private _postService: PostService) {
    this.newPost = new Post('','','','','');
  }

  // Primer metodo que se ejecutara al cargar la pagina
  ngOnInit(): void {

    this.getPost()
  }

  // Invocar el servicio con el metodo, se le pasa el form que llega por parametro y subscribe recoge la respuesta
  addOrEditPost(form: NgForm) {
    if (form.value._id) {
      this._postService.putPost(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Updated succesfully' });
        this.getPost();
      });
    } else {
      this._postService.postPost(form.value).subscribe(res => {
        this.resetForm(form);
        M.toast({ html: 'Save succesfully' });
        this.getPost();
      });
    }
  }

  getPost() {
    this._postService.getPosts().subscribe(
      res => {
        // console.log(res);
        if(res){
          this.allPosts = res;
        }
      });
  };

  // Selecciona el Post editar
  editPost(post: Post) {
    this.newPost = post;
  }

  deletePost(_id: string){
    if(confirm('Are you sure you want to delete it')){
      this._postService.deletePost(_id).subscribe(
        res => {
          this.getPost();
          M.toast({html: 'Deleted successfully'});
        });
    }
  }

  // Recibe como parametro un formulario para resetear los campos
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

}




// ---------------------------------------- V2 ----------------------------------------------



// import { Component, OnInit } from '@angular/core';

// import { PostService } from '../../services/post.service';
// import { NgForm } from '@angular/forms';
// import { Post } from 'src/app/models/post';

// // Variable para trabajar con los mensajes toast de materialize
// declare var M: any;

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css'],
//   providers: [PostService]
// })
// export class PostsComponent implements OnInit {

//   constructor(public postService: PostService) { }

//   ngOnInit(): void {

//     this.getPost()
//   }

//   addPost(form: NgForm) {
//     if (form.value._id) {
//       this.postService.putPost(form.value).subscribe(res => {
//         this.resetForm(form);
//         M.toast({ html: 'Updated succesfully' });
//         this.getPost();
//       });
//     } else {
//       this.postService.postPost(form.value).subscribe(res => {
//         this.resetForm(form);
//         M.toast({ html: 'Save succesfully' });
//         this.getPost();
//       });
//     }
//   }

//   getPost() {
//     this.postService.getPosts().subscribe(res => {
//       this.postService.posts = res as Post[];
//     });
//   };

//   editPost(post: Post) {
//     this.postService.selectedPost = post;
//     // this.postService.putPost();
//   }

//   deletePost(_id: string){
//     if(confirm('Are you sure you want to delete it')){
//       this.postService.deletePost(_id).subscribe(res => {
//         this.getPost();
//         M.toast({html: 'Deleted successfully'});
//       });
//     }
//   }

//   // Recibe como parametro un formulario para resetear los campos
//   resetForm(form?: NgForm) {
//     if (form) {
//       form.reset();
//       this.postService.selectedPost = new Post;
//     }
//   }

// }
