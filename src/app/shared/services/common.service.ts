import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Blog } from "../../shared/models/Blog";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  blogs: Blog[] = [
    { title: 'Angular Service', image: '/assets/images/images/service.PNG', duration: 5, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.', author: 'Harshit', paragraph: 'Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'},
    { title: 'Angular Model', image: '/assets/images/images/model.PNG', duration: 3, description: 'Angular is good Angular is good Angular is good Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.Angular is good Angular is good', author: 'Harshit', paragraph: '' },
    { title: 'Angular Data', image: '', duration: 8, description: 'Angular is good Angular is good Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Angular is good Angular is good Angular is good', author: 'Harshit', paragraph: '' },
    { title: 'Angular Decorator', image: '', duration: 6, description: 'discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Angular is good Angular is good Angular is good Angular is good Angular is good', author: 'Harshit', paragraph: '' },
    { title: 'Angular', image: '', duration: 2, description: 'Angular is good. discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. Angular is good Angular is good Angular is good Angular is good', author: 'Harshit', paragraph: '' }
  ]

  private subject = new Subject<boolean>();

  openNewBlogDialogue: boolean = false;

  constructor() { }

  getBlogsList() {
    return this.blogs;
  }

  sendRequest(open: boolean) {
    this.subject.next(open);
  }

  getRequest(): Observable<any> {
    return this.subject.asObservable();
  }
}
