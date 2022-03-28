import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chanson } from '../model/chanson';
import { ChansonService } from '../service/chanson.service';

@Component({
  selector: 'app-admin-chanson',
  templateUrl: './admin-chanson.component.html',
  styleUrls: ['./admin-chanson.component.scss']
})
export class AdminChansonComponent implements OnInit {
  chansons!: Chanson[];
  displayedColumns: string[] = ['artiste', 'titre'];
  dataSource!: MatTableDataSource<Chanson>;
  
  constructor(private chansonService: ChansonService) { }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.chansonService.getAllChansons().subscribe( (chansons) => { 
      this.chansons = chansons;
      this.dataSource = new MatTableDataSource<Chanson>(this.chansons);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = function (record,filter) {
        console.log(record.artiste == filter)
        return record.artiste.toLowerCase().includes(filter) || record.titre.toLocaleLowerCase().includes(filter);
      }    
    });
    
  }
  
  applyFilter(event: Event, typeFilter: string) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  //TODO Ajout chanson

  //TODO Suppression chanson

}