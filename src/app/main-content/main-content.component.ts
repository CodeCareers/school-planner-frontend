import { Component } from '@angular/core';

/* This import will be used to connect with the Backend */
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  assignments: any; // Define a property to store the retrieved assignments

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAssignments().subscribe(assignments => {
      console.log(assignments);
      this.assignments = assignments; // Assign the retrieved assignments to the property
    });
  }

  getAssignments() {
    // const options = { params: new HttpParams().set("classCategory", "Programming Languages") };
    return this.http.get<any[]>('http://localhost:8080/assignment/get/list/due'); // Make an HTTP GET request to the API
  }

}
