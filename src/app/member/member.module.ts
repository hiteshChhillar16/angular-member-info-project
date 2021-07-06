import { NgModule } from '@angular/core';
import { MemberListComponent } from './member-list.component';
 import { AddMemberComponent } from './add-member.component';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MemberListComponent,
    AddMemberComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'members', component: MemberListComponent },
      {
        path: 'addMember',
        component: AddMemberComponent
      }
    ]),
    SharedModule
  ]
})
export class MemberModule { }
