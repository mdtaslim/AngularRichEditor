import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss']
})
export class TinymceComponent implements OnInit {

  blogForm: FormGroup;
  maritalStatuses: any;
  publishs = [{ value: 1, text: 'Publish' }, { value: 0, text: 'No Publish' }];
  today = new Date();
  @ViewChild('formDirective') private formDirective: NgForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.blogForm = this.fb.group({
      id: [null],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      publishDate: [null],
      isPublish: [2, Validators.required],
      author: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      postText: [''],
      isTermsPolicy: [false, [Validators.required]]
    });
  }

  save() {
    if (this.blogForm.valid) {
      console.log('sumit valid');
      const form = this.blogForm.getRawValue();
      if (form.id > 0) {
        console.log('edit', form, this.blogForm);
      } else {
        console.log('add', form, this.blogForm);
      }
    }
    console.log('sumit invalid');
  }

  reset() {

  }

}
