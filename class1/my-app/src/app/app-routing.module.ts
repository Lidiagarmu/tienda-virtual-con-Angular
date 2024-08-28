import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Asegúrate de importar el componente!!! CAMBIO LIDIA
import { AppComponent } from './app.component'; // Importa el componente raíz, si es necesario CAMBIO LIDIA
const routes: Routes = [ 
   { path: '', component: AppComponent } // Usa AppComponent como componente raiz CAMBIO LIDIA
  // Agrega otras rutas si es necesario];
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
