import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { ContentComponent } from './content/content.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { ModifyComponent } from './modify/modify.component';
import { LoginComponent } from './login/login.component';
import { RautComponent } from './raut/raut.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ScheduleComponent } from './schedule/schedule.component';
import { View1Component } from './view1/view1.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ManageComponent } from './manage/manage.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SimpleComponent } from './simple/simple.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    FlightComponent,
    ContentComponent,
    AddComponent,
    DeleteComponent,
    ViewComponent,
    ModifyComponent,
    LoginComponent,
    RautComponent,
    ScheduleComponent,
    View1Component,
    ReserveComponent,
    ManageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SimpleComponent
  
  ],
  imports: [
    BrowserModule,FormsModule,    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,
    AppRoutingModule,RouterModule.forRoot([{path:'reg',component:RegisterComponent},
    {path:'flt',component:FlightComponent},{path:'content',component:ContentComponent},
  {path:'ad',component:AddComponent},{path:'login',component:LoginComponent},
  {path:'vw',component:ViewComponent},{path:'mod',component:ModifyComponent},
  {path:'del',component:DeleteComponent},{path:'raut',component:RautComponent},
  {path:'schedule',component:ScheduleComponent},{path:'vw1',component:View1Component},
{path:'reserve',component:ReserveComponent},{path:'manage',component:ManageComponent},
{path:'home',component:HomeComponent},{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
