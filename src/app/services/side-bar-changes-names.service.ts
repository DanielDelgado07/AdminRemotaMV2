import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarChangesNamesService {
  nameUser!: string;
  roleUser!: string;
  constructor() { }
}
