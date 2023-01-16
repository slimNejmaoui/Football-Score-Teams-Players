import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoresComponent } from './components/scores/scores.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { BlogComponent } from './components/blog/blog.component';
import { MathchsComponent } from './components/mathchs/mathchs.component';
import { MatchComponent } from './components/match/match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayersComponent } from './components/players/players.component';
import { AddmatchsComponent } from './components/addmatchs/addmatchs.component';
import { AddteamsComponent } from './components/addteams/addteams.component';
import { AddplayersComponent } from './components/addplayers/addplayers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchestableComponent } from './components/matchestable/matchestable.component';
import { TeamtableComponent } from './components/teamtable/teamtable.component';
import { PlayertableComponent } from './components/playertable/playertable.component';
import { ArticleComponent } from './components/article/article.component';
import { MymatchesComponent } from './components/mymatches/mymatches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { DisplayTeamsComponent } from './components/display-teams/display-teams.component';
import { BannerComponent } from './components/banner/banner.component';
import { DisplayPlayersComponent } from './components/display-players/display-players.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayersComponent } from './components/edit-players/edit-players.component';
import { EditTeamsComponent } from './components/edit-teams/edit-teams.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { MyFiltrePipe } from './pipes/my-filtre.pipe';
import { HttpClientModule } from "@angular/common/http";
import { UseresTableComponent } from './components/useres-table/useres-table.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SearchComponent } from './components/search/search.component';
import { ItemMatchComponent } from './components/item-match/item-match.component';
import { LogintestComponent } from './components/logintest/logintest.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumTableComponent } from './components/stadium-table/stadium-table.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { WeatherComponent } from './weather/weather.component';
import { TestComponent } from './components/test/test.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { TeamSapiComponent } from './components/team-sapi/team-sapi.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CupEventComponent,
    ScoresComponent,
    NewsComponent,
    RankingComponent,
    BlogComponent,
    MathchsComponent,
    MatchComponent,
    PlayerInfoComponent,
    PlayersComponent,
    AddmatchsComponent,
    AddteamsComponent,
    AddplayersComponent,
    DashboardComponent,
    MatchestableComponent,
    TeamtableComponent,
    PlayertableComponent,
    ArticleComponent,
    MymatchesComponent,
    DisplayMatchComponent,
    DisplayTeamsComponent,
    BannerComponent,
    DisplayPlayersComponent,
    EditMatchComponent,
    EditPlayersComponent,
    EditTeamsComponent,
    ReversePipe,
    AsterixPipe,
    MyFiltrePipe,
    UseresTableComponent,
    EditUsersComponent,
    ProfileComponent,
    EditProfileComponent,
    SearchComponent,
    ItemMatchComponent,
    LogintestComponent,
    AddStadiumComponent,
    StadiumTableComponent,
    AddDataComponent,
    WeatherComponent,
    TestComponent,
    TeamSapiComponent,
    LoaderComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
