import { Routes } from '@angular/router';
import { HlavniStrankaComponent } from './Components/pages/hlavni-stranka/hlavni-stranka.component';
import { DiskuzeComponent } from './Components/pages/diskuze/diskuze.component';
import { KontaktComponent } from './Components/pages/kontakt/kontakt.component';
import { TabulkaLigyPageComponent } from './Components/pages/Tabulka-ligy-page/Tabulka-ligy-page.component';
import { TabulkaStrelcuPageComponent } from './Components/pages/tabulka-strelcu-page/tabulka-strelcu-page.component';
import { TipovaciSoutezComponent } from './Components/pages/tipovaci-soutez/tipovaci-soutez.component';
import { PrihlaseniComponent } from './Components/pages/prihlaseni/prihlaseni.component';
import { RegistraceComponent } from './Components/pages/registrace/registrace.component';
import { TeamDetailsComponent } from './Components/team-details/team-details.component';
import { PlayerComponent } from './Components/pages/player/player.component';
import { MojeSazeckyPageComponent } from './Components/pages/Moje-sazecky-page/Moje-sazecky-page.component';

export const routes: Routes = [
  { path: '', component: HlavniStrankaComponent },
  { path: 'diskuze', component: DiskuzeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'tabulka-ligy', component: TabulkaLigyPageComponent },
  { path: 'tabulka-strelcu', component: TabulkaStrelcuPageComponent },
  { path: 'tipovaci-soutez', component: TipovaciSoutezComponent },
  { path: 'teams/:teamId', component: TeamDetailsComponent },
  {path: 'moje-sazecky-page', component: MojeSazeckyPageComponent},
  { path: 'hraci/:id', component: PlayerComponent },
  { path: 'prihlaseni', component: PrihlaseniComponent },
  { path: 'registrace', component: RegistraceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
