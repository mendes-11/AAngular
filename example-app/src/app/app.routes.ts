import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ClienteComponent } from './cliente/cliente.component';


export const routes: Routes = [
    { path: 'l', component: LoginComponent },
    { path: '', component: MainComponent },
    { path: 'cliente', component: ClienteComponent},

];
