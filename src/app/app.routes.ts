import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyTurnComponent } from './my-turn/my-turn.component';
import { SelectTurnComponent } from './select-turn/select-turn.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'my-turn', component: MyTurnComponent },
    { path: "select-turn", component: SelectTurnComponent },
    { path: '**', redirectTo: 'login' },

];
