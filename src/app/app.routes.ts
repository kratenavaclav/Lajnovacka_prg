import { Routes } from '@angular/router';
import { HlavniStrankaComponent } from './Components/pages/hlavni-stranka/hlavni-stranka.component';
import { DiskuzeComponent } from './Components/pages/diskuze/diskuze.component';
import { KontaktComponent } from './Components/pages/kontakt/kontakt.component';
import { TabulkaLigyComponent } from './Components/pages/tabulka-ligy/tabulka-ligy.component';
import { TabulkaStrelcuComponent } from './Components/pages/tabulka-strelcu/tabulka-strelcu.component';
import { TipovaciSoutezComponent } from './Components/pages/tipovaci-soutez/tipovaci-soutez.component';
import { PrihlaseniComponent } from './Components/pages/prihlaseni/prihlaseni.component';
import { RegistraceComponent } from './Components/pages/registrace/registrace.component';
import { SpartaComponent } from './Components/team-details/sparta/sparta/sparta.component';
import { BanicekComponent } from './Components/team-details/banicek/banicek/banicek.component';
import { BohemkaComponent } from './Components/team-details/bohemka/bohemka/bohemka.component';
import { BoleslavComponent } from './Components/team-details/boleslav/boleslav/boleslav.component';
import { BudejkyComponent } from './Components/team-details/budejky/budejky/budejky.component';
import { DuklaComponent } from './Components/team-details/dukla/dukla/dukla.component';
import { HradecComponent } from './Components/team-details/hradec/hradec/hradec.component';
import { JablonecComponent } from './Components/team-details/jablonec/jablonec/jablonec.component';
import { KarvinaComponent } from './Components/team-details/karvina/karvina/karvina.component';
import { LiberecComponent } from './Components/team-details/liberec/liberec/liberec.component';
import { OlomoucComponent } from './Components/team-details/olomouc/olomouc/olomouc.component';
import { PardubiceComponent } from './Components/team-details/pardubice/pardubice/pardubice.component';
import { PlzenComponent } from './Components/team-details/plzen/plzen/plzen.component';
import { SlavieComponent} from './Components/team-details/slavie/slavie/slavie.component';
import { SlovackoComponent } from './Components/team-details/slovacko/slovacko/slovacko.component';
import { TepliceComponent } from './Components/team-details/teplice/teplice/teplice.component';



export const routes: Routes = [
  { path: '', component: HlavniStrankaComponent },
  { path: 'diskuze', component: DiskuzeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'tabulka-ligy', component: TabulkaLigyComponent },
  { path: 'tabulka-strelcu', component: TabulkaStrelcuComponent },
  { path: 'tipovaci-soutez', component: TipovaciSoutezComponent },
  { path: 'teams/sparta', component: SpartaComponent },
  { path: 'teams/banicek', component: BanicekComponent },
  { path: 'teams/bohemka', component: BohemkaComponent },
  { path: 'teams/boleslav', component: BoleslavComponent },
  { path: 'teams/budejky', component: BudejkyComponent },
  { path: 'teams/dukla', component: DuklaComponent },
  { path: 'teams/hradec', component: HradecComponent },
  { path: 'teams/jablonec', component: JablonecComponent },
  { path: 'teams/karvina', component: KarvinaComponent },
  { path: 'teams/liberec', component: LiberecComponent },
  { path: 'teams/olomouc', component: OlomoucComponent },
  { path: 'teams/pardubice', component: PardubiceComponent },
  { path: 'teams/plzen', component: PlzenComponent },
  { path: 'teams/slavie', component: SlavieComponent },
  { path: 'teams/slovacko', component: SlovackoComponent },
  { path: 'teams/teplice', component: TepliceComponent },
  { path: 'prihlaseni', component: PrihlaseniComponent },
  { path: 'registrace', component: RegistraceComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },




];

