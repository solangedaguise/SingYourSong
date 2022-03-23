import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chanson } from '../model/chanson';
import { ChansonService } from '../service/chanson.service';

@Component({
  selector: 'app-admin-chanson',
  templateUrl: './admin-chanson.component.html',
  styleUrls: ['./admin-chanson.component.scss']
})
export class AdminChansonComponent implements OnInit, AfterViewInit {
  chansons!: Chanson[];
  displayedColumns: string[] = ['artiste', 'titre'];
  dataSource!: MatTableDataSource<Chanson>;
  filter!: string;

  constructor(private chansonService: ChansonService) { }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
    this.chansonService.getAllChansons().subscribe( (chansons) => { 
      this.chansons = chansons;
      this.dataSource = new MatTableDataSource<Chanson>(this.chansons)
      this.dataSource.paginator = this.paginator;
    });
  }
  ngAfterViewInit() {
    
  }

  //TODO Ajout chanson

  //TODO Suppression chanson

  //TODO display chanson
}
const ELEMENT_DATA: Chanson[] = [
  {id: "1", artiste: 'Hydrogen', titre: "1.1111",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "2", artiste: 'Helium', titre: "1.2222",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "3", artiste: 'lithium', titre: "1.3333",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "4", artiste: 'Beryllium', titre: "1.4444",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "5", artiste: 'Boron', titre: "1.5555",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "6", artiste: 'Carbon', titre: "1.6666",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "7", artiste: 'Nitrogen', titre: "1.7777",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "8", artiste: 'Oxygen', titre: "1.8888",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "9", artiste: 'Fluorine', titre: "1.9999",lien:"",lienEmbed:"",nombreChanteurs:1},
  {id: "10", artiste: 'Neon', titre: "1.1010",lien:"",lienEmbed:"",nombreChanteurs:1},
]
