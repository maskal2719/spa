import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './posts-page/post/post.component';
import { AddFormComponent } from './posts-page/add-form/add-form.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchPipe} from "./services/search.pipe";
import { PostDetailsComponent } from './posts-page/post-details/post-details.component';
import { PostEditComponent } from './posts-page/post-edit/post-edit.component';
import { HttpClientModule} from "@angular/common/http";
import { WeatherService} from "./weather-page/weather.service";
import { ScrollingModule} from "@angular/cdk/scrolling";
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './cdk-tasks/table/table.component';
import {CdkTableModule} from "@angular/cdk/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import { CdkTasksComponent } from './cdk-tasks/cdk-tasks.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostsPageComponent,
    WeatherPageComponent,
    HeaderComponent,
    PostComponent,
    AddFormComponent,
    SearchPipe,
    PostDetailsComponent,
    PostEditComponent,
    LoginPageComponent,
    TableComponent,
    CdkTasksComponent,
    RegistrationPageComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ScrollingModule,
        BrowserAnimationsModule,
        CdkTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSortModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatStepperModule,
        MatProgressBarModule,

    ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
