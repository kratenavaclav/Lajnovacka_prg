import { Routes } from '@angular/router';
import { HlavniStrankaComponent } from './Components/pages/hlavni-stranka/hlavni-stranka.component';
import { DiskuzeComponent } from './Components/pages/diskuze/diskuze.component';
import { KontaktComponent } from './Components/pages/kontakt/kontakt.component';
import { TabulkaLigyComponent } from './Components/pages/tabulka-ligy/tabulka-ligy.component';
import { TabulkaStrelcuComponent } from './Components/pages/tabulka-strelcu/tabulka-strelcu.component';
import { TipovaciSoutezComponent } from './Components/pages/tipovaci-soutez/tipovaci-soutez.component';
import { PrihlaseniComponent } from './Components/pages/prihlaseni/prihlaseni.component';
import { RegistraceComponent } from './Components/pages/registrace/registrace.component';
import { TeamDetailsComponent } from './Components/team-details/team-details.component';

export const routes: Routes = [
  { path: '', component: HlavniStrankaComponent },
  { path: 'diskuze', component: DiskuzeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'tabulka-ligy', component: TabulkaLigyComponent },
  { path: 'tabulka-strelcu', component: TabulkaStrelcuComponent },
  { path: 'tipovaci-soutez', component: TipovaciSoutezComponent },
  { path: 'teams/:teamId', component: TeamDetailsComponent },
  { path: 'prihlaseni', component: PrihlaseniComponent },
  { path: 'registrace', component: RegistraceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
