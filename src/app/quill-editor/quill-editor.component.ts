import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {

  blurred = false
  focused = false
  blogForm: FormGroup;
  maritalStatuses: any;
  publishs = [{ value: 1, text: 'Publish' }, { value: 0, text: 'No Publish' }];
  today = new Date();
  @ViewChild('formDirective') private formDirective: NgForm;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.blogForm = this.fb.group({
      id: [null],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      publishDate: [null],
      isPublish: [2],
      author: [''],
      email: [''],
      postText: [''],
      isTermsPolicy: [false]
    });
  }

  save(): void {
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

  reset(): void {

  }


  created(event: Quill) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true;
    this.blurred = false;
  }

  blur($event) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false;
    this.blurred = true;
  }
}
