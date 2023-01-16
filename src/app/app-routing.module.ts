import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDataComponent } from './components/add-data/add-data.component';
import { AddmatchsComponent } from './components/addmatchs/addmatchs.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';
import { AddteamsComponent } from './components/addteams/addteams.component';
import { AuthGuard } from './auth.guard';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayTeamsComponent } from './components/display-teams/display-teams.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayersComponent } from './components/edit-players/edit-players.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MathchsComponent } from './components/mathchs/mathchs.component';
import { MymatchesComponent } from './components/mymatches/mymatches.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamSapiComponent } from './components/team-sapi/team-sapi.component';
import { TestComponent } from './components/test/test.component';
import { DisplayPlayersComponent } from './components/display-players/display-players.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LogintestComponent } from './components/logintest/logintest.component';
import { PlayersComponent } from './components/players/players.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoleGuard } from './role.guard';
import { WeatherComponent } from './weather/weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "registre", component: SignupComponent },
  { path: "registreAdmin", component: SignupComponent },
  { path: "matches", component: MathchsComponent },
  { path: "players", component: PlayersComponent },
  { path: "addmatch", component: AddmatchsComponent },
  { path: "addteam", component: AddteamsComponent },
  { path: "addpalyer", component: AddplayersComponent },
  {
    path: "dashboard", component: DashboardComponent,
  },
  { path: "mymatches", component: MymatchesComponent },
  { path: "displyMatch/:id", component: DisplayMatchComponent },
  { path: "displyTeams/:id", component: DisplayTeamsComponent },
  { path: "displayplayer/:id", component: DisplayPlayersComponent },
  { path: "editMAtch/:id", component: EditMatchComponent },
  { path: "editplayers/:id", component: EditPlayersComponent },
  { path: "editTeams/:id", component: EditTeamsComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "editProfile/:id", component: EditProfileComponent },
  { path: "search", component: SearchComponent },
  { path: "loginTest", component: LogintestComponent },
  { path: "addStadium", component: AddStadiumComponent },
  { path: "editStadium/:id", component: AddStadiumComponent },
  { path: "editStadium/:id", component: AddStadiumComponent },
  { path: "AddData", component: AddDataComponent },
  { path: "weather", component: WeatherComponent },
  { path: "test", component: TestComponent },
  { path: "apiTeams", component: TeamSapiComponent },
  { path: "**", component: NotFoundComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
