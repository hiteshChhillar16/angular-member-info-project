import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMember } from './member';
import { RandomService } from './random.service';
import { MemberService } from './member.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit, OnDestroy {
   pageTitle = 'Create Member';
  // length = 0;
  // errorMessage = '';
   sub!: Subscription;
  // dataArray:any;
  // members:IMember[]=[];
  member:IMember = {
    address:"",
    age:"",
    city:"",
    dob:"",
    email:"",
    firstName:"",
    gender:"",
    lastName:"",
    memberId:"0",
    phone:"",
    postcode:"",
    state:"",
    thumbnail:""
  };

  constructor(private randomService:RandomService, private memberService: MemberService, private router:Router) {}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

  onSaveUser(): void{
    console.log('save clicked');
    this.member.memberId = Math.floor((Math.random() * 100000) + 1).toString();
    this.sub = this.memberService.createMember(this.member).subscribe({
      next:data =>{
        console.log('save data');
        console.log(data);
        this.router.navigateByUrl('/members');
      }
    })
  }

  getRandomUser(): void{
    this.sub = this.randomService.getRandomUser().subscribe({
      next: data => {
        let temp = data['results'][0];
        this.member.address = temp.location.street.number + ' '+ temp.location.street.name;
        this.member.age = temp.dob.age.toString();
        this.member.city = temp.location.city;
        this.member.dob = temp.dob.date;
        this.member.email = temp.email;
        this.member.firstName = temp.name.first;
        this.member.gender = temp.gender;
        this.member.lastName = temp.name.last;
        this.member.memberId = Math.floor((Math.random() * 100000) + 1).toString();
        this.member.phone = temp.phone;
        this.member.postcode = temp.location.postcode;
        this.member.state = temp.location.state;

        let apiValue =  temp.picture.thumbnail.toString().slice(25);
        this.member.thumbnail = 'http://localhost:4200/randomuser'+ apiValue
      }
    });
  }

}
