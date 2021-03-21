import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AutoCompleteModule} from 'primeng/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { MenuComponent } from './components/menu/menu.component';
import { LordenesComponent } from './components/lordenes/lordenes.component';
import { CordenesComponent } from './components/cordenes/cordenes.component';
import { LoadingComponent } from './common/loading/loading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from './service/loader-service.service';
import { DataApiService } from './service/data-api.service';

import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfigService } from './config/config.service';
import { ConfigLoader } from './config/config.loader';
import { AordenesComponent } from './components/aordenes/aordenes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FooterComponent,
    HomeComponent,
    LogoutComponent,
    SidenavComponent,
    NavbarComponent,
    Page404Component,
    MenuComponent,
    LordenesComponent,
    CordenesComponent,
    LoadingComponent,
    AordenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule, 
    MatNativeDateModule,
    MatInputModule,
    AutoCompleteModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [DataApiService,LoaderService,ConfigService,{
    provide: APP_INITIALIZER,
    useFactory: ConfigLoader,      
    deps: [ConfigService],
    multi: true
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
