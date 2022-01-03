import { employee } from './../../../../libs/data-employeedetails/employeedata.model';
import { Injectable } from '@nestjs/common';
import { Flight } from 'apps/employee-api/Models/Employee.model';

@Injectable()
export class AppService {

  employeeData:employee[]=[
    {
      id: 'ARIQT2132',
      name: 'Shaik Yousuf Ali',
      role: 'Developer',
      mail: 'Sali@ariqt.com',
      contact: 62552635,
    },
    {
      name: 'Shaik Roshan',
      role: 'Developer',
      mail: 'rshaik@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2133',

    },
    {
      name: 'Bala',
      role: 'Tester',
      mail: 'bkrishna@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2134'
    },
    {
      name: 'Zaheer Uddin',
      role: 'Android Team Lead',
      mail: 'mzaheerudding@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2145'
    },
    {
      name: 'Sai Charan',
      role: 'Developer',
      mail: 'scharan@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2130'
    },
    {
      name: 'Rizwan',
      role: 'Tester',
      mail: 'rizwan@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2129'
    },
    {
      name: 'Raja',
      role: 'Developer',
      mail: 'raja@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2131'
    },
    {
      name: 'Sandeep',
      role: 'Developer',
      mail: 'vsandeep@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2135'
    },
    {
      name: 'Zakir',
      role: 'Developer',
      mail: 'zakir@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2136'
    },
    {
      name: 'Hruday',
      role: 'Developer',
      mail: 'hruday@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2137'
    },
    {
      name: 'Nikita',
      role: 'Tester',
      mail: 'nikita@ariqt.com',
      contact: 62552635,
      id: 'ARIQT2138'
    }
  ]
  getData(): employee[] {
    return this.employeeData;
  }
}
