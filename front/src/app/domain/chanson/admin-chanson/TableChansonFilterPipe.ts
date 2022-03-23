import { Pipe, PipeTransform } from "@angular/core";
import { Chanson } from "../model/chanson";

@Pipe({
    name: 'tableFilter'
 })
 export class TableFilterPipe implements PipeTransform {
 
    transform(list: Chanson[], value: string) { console.log(value ? list.filter(item => item.titre.includes(value)) : list);
       return value ? list.filter(item => item.titre.includes(value)) : list;
    }
 }