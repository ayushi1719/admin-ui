import { Component } from '@angular/core';
import * as adminData from 'src/assets/data/adminmembers.json'
import { Admin } from 'src/interface/admin'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  adminMembers: Admin[] = (adminData as any).default;
  selectedAdmins!: Admin[];
  adminmember!: Admin;
  adminDialog: boolean = false;


  //Opening of dialog box to edit particular admin
  editAdmin(adminmember: any) {
    this.adminmember = { ...adminmember };
    this.adminDialog = true;
  }

  // Delete particular admin
  deleteAdmin(adminmember: any) {
    this.adminMembers = this.adminMembers.filter((val) => val.id !== adminmember.id);
    this.adminmember = {};
  }

  // Delete all the selected admin
  deleteSelectedAdmins() {
    this.adminMembers = this.adminMembers.filter((val) => !this.selectedAdmins?.includes(val));
    this.selectedAdmins = [];
  }

  // Editing admin using ID
  updateAdmin() {
    this.adminMembers[this.findAdminIndex(this.adminmember.id!)] = this.adminmember;
    this.adminDialog = false;    
  }
  // Finding the index of particular admin to be edited
  findAdminIndex(id: string) {
    for(let i=0; i<this.adminMembers.length; i++) {
      if(this.adminMembers[i].id == id) 
        return i;
    }
    return -1;
  }

  hideDialog() {
    this.adminDialog = false;
  }

}
