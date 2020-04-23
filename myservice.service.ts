import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Register} from './model/registration';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  db:AngularFirestore;
  r:Register;
  constructor(db:AngularFirestore)
  {
    this.db =db;
  }

  public insertData(r:Register)
  {
    var coll = this.db.collection<Register>('customer');
    this.r=
    {
    txtFname: r.txtFname,
    txtLname:r. txtLname,
    dob:r.dob,
    txtCity:r.txtCity,
    txtZip:r.txtZip,
    txtMnumber:r.txtMnumber,
    txtAnumber:r.txtAnumber,
    txtEmail:r.txtEmail,

    }
    coll.add(this.r);
    alert("Added successfully");
    
    }

}
