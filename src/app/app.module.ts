import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill';
import { TinymceComponent } from './tinymce/tinymce.component';

@NgModule({
  declarations: [
    AppComponent,
    TinymceComponent,
    PageNotFoundComponent,
      CkeditorComponent,
      QuillEditorComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EditorModule,
    CKEditorModule,
    QuillModule.forRoot()
  ],
  providers: [{ provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
