import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: MenuItem[];
  
  constructor(){
    this.items=[];
  }

  ngOnInit() {
      this.items = [
          {
              label: 'Usuarios',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Email', icon: 'pi pi-fw pi-envelope'},
                  {label: 'Contraseña', icon: 'pi pi-fw pi-key'},
                  {label: 'Registarte', icon: 'pi pi-fw pi-window-minimize'},
                  {label: 'Iniciar Sesión', icon: 'pi pi-fw pi-user'}
              ]
          }
      ];
  }
}
