import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-incident',
  templateUrl: './log-incident.component.html',
  styleUrls: ['./log-incident.component.css'],
})
export class LogIncidentComponent implements OnInit {
  getId: any;
  IncidentLogs: any = [];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.getId)

    // this.crudService.GetIncidents().subscribe((res: any) => {
    //   console.log(res)
    //   this.allIncidents = res
    //   this.Incidents = res.filter((obj: any) => {
    //     return obj.status.toLowerCase() !== 'closed'
    //   })
    // })
    this.crudService.GetIncidentLog(this.getId).subscribe((res) => {
      
      console.log(res)
      this.IncidentLogs = res
    });

  }

  ngOnInit() { }

}
