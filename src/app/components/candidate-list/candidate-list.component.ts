import { Component, OnInit } from '@angular/core';
import { CandidateInfoService } from '../../services/candidate-info.service';
import { Canditate } from '../../models/canditate';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
  candidateList : Canditate[];
  constructor(private candidateService: CandidateInfoService) { }

  ngOnInit() {
    this.getAllCandidates();
  }

  getAllCandidates(){
    this.candidateService.getAllCandidates().subscribe(
      data => {
              this.candidateList = data;
      }
    );
  }
}
