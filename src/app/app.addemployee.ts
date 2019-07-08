import { Component,Input,EventEmitter, Output } from "@angular/core";
//import {  } from "events";

@Component({
    selector:'add-comp',
    templateUrl:'app.add.html'
})

export class AddEmployeeComponent{
    @Input()
    inchild:string;//for parent to child

    @Output()
    notify:EventEmitter<string>= new EventEmitter<string>();//for child to parent

    callingParent():any{
        this.notify.emit("From child data send...");
    }

    // empId:number;
    // empName:string;
    // empSalary:number;

    // empAll:any[]=[{empId:1001,empName:"ABCD",empSalary:10000.1},
    // {empId:1002,empName:"BCD",empSalary:10000.11},
    // {empId:1003,empName:"CD",empSalary:10000.12}];//writing an array

    // addEmployee():any{
    //     this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})//will show[object],[object]......
    //     //this.empAll.push(this.empId,this.empName,this.empSalary)//will show the values which is being inserted even while printing
    //     console.log("Employee Added!..."+this.empAll)
    // }

    // deleteEmployee(data:number):any{
    //    // alert("Delete..."+data);
    //     this.empAll.splice(data,1)
    // }
}