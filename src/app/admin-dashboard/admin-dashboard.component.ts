import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from "@angular/router"

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) { }

  approve(): void {
    const dialogRef = this.dialog.open(AdminApprovalDialog, {
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

  view(): void {
    this.router.navigateByUrl('usersearch', { skipLocationChange: true });
  }

}

@Component({
  selector: 'admin-approval-dialog',
  templateUrl: 'admin-approval-dialog.html',
})
export class AdminApprovalDialog {

  constructor(
    public dialogRef: MatDialogRef<AdminApprovalDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}