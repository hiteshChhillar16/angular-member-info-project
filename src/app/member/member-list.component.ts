import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMember } from './member';
import { MemberService } from './member.service';

@Component({
  templateUrl: './Member-list.component.html',
  styleUrls: ['./Member-list.component.css']
})
export class MemberListComponent implements OnInit, OnDestroy {
  pageTitle = 'Member List';
  length = 0;
  errorMessage = '';
  sub!: Subscription;
  dataArray:any;
  members:IMember[]=[];

  constructor(private MemberService: MemberService) {}

  ngOnInit(): void {
    this.getAllMembers();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  deleteMember(memberId:string): any{
    this.sub = this.MemberService.deleteMember(memberId).subscribe({
      next: data => {
        console.log(data);
        this.getAllMembers();
      },
      error: err => this.errorMessage = err
    });
  }

  getAllMembers(){
    this.sub = this.MemberService.getMembers().subscribe({
      next: data => {
        this.dataArray = data;
        this.members = data['data']; 
        console.log(this.members);
      },
      error: err => this.errorMessage = err
    });
  }

}
