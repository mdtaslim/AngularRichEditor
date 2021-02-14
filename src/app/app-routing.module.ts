import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { TinymceComponent } from './tinymce/tinymce.component';

const routes: Routes = [
  { path: '', redirectTo: 'tinymce', pathMatch: 'full' },
  { path: 'tinymce', component: TinymceComponent },
  { path: 'ckeditor', component: CkeditorComponent },
  { path: 'quill-editor', component: QuillEditorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
