import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  dataList: [];
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  pendingTaskUrl = ' http://localhost:8080/user/request/getAll/pending';

  dataList = [];

  constructor(public dialog: MatDialog, private router: Router, private http: HttpClient, private snackBar: MatSnackBar) { }

  approve(): void {
    this.http.get(this.pendingTaskUrl)
      .subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            this.dataList.push({ id: res[i]['emailId'], date: res[i]['requestDate'] })
          }
        },
        err => {
          this.snackBar.open('Request timeout!', 'Dismiss', {
            duration: 1000,
          });
        }
      );
    console.log(this.dataList)
    const dialogRef = this.dialog.open(AdminApprovalDialog, {
      data: { dataList: this.dataList }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.dataList = [];
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