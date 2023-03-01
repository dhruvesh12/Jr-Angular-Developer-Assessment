import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/MainService/main-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-to-listing',
  templateUrl: './post-to-listing.component.html',
  styleUrls: ['./post-to-listing.component.css']
})
export class PostToListingComponent {

  postForm!: FormGroup
  submitted: any = false
  constructor(private service: MainServiceService, private FormBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.postForm = this.FormBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      Message: ['', [Validators.required]]
    })


  }

  Submit() {
    this.submitted = true


    if (this.postForm.invalid) {
      return;
    }

    this.service.postMessage(this.postForm.value)
    this.submitted=false
    this.postForm.reset()
    
    this.service.getAllMessage()

  }

}
