import { Component } from '@angular/core';
import * as adminData from 'src/assets/data/adminmembers.json'
import { Admin } from 'src/interface/admin'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  
  admindata: any = (adminData as any).default;
  adminMembers: Admin[] = [];
  selectedAdmins!: Admin;

  ngOnInit(): void {
    // console.log(this.admindata);

    for(let i=0; i< Object.keys(this.admindata).length; i++) {
      // console.log(this.admindata[i]);

      this.adminMembers.push(this.admindata[i])
    }
    // console.log(this.adminMembers);
  }
}
