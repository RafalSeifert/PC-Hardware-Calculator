import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/components/about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FlexLayoutModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
