import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {

  constructor(public http:Http) { }
	
	getTodos(){
		return this.http.get('/api/todos');
	}
	
	saveTodo(todo) {
		console.log(JSON.stringify(todo));
		var headers = new Headers();
		headers.append('Content-Type','application/json');
    return this.http.post('/api/todo', JSON.stringify(todo),{headers: headers})
       .map(res => res.json());
    }
	

	updateTodo(todo){
  	var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.put('/api/todo/'+todo._id, JSON.stringify(todo),{headers: headers});
   }

 	deleteTodo(id){
    return this.http.delete('/api/todo/'+id);
  }
	

}
