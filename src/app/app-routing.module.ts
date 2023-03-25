import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LogearComponent } from './logear/logear.component';
import { PagoComponent } from './pago/pago.component';
import { ProductoComponent } from './producto/producto.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'iniciarSesion', component: LogearComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'registro', component:  RegistroComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}