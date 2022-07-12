import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {PostsPageComponent} from "./posts-page/posts-page.component";
import {WeatherPageComponent} from "./weather-page/weather-page.component";
import {PostDetailsComponent} from "./posts-page/post-details/post-details.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {TableComponent} from "./cdk-tasks/table/table.component";
import {CdkTasksComponent} from "./cdk-tasks/cdk-tasks.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {AddFormComponent} from "./posts-page/add-form/add-form.component";



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'posts', component: PostsPageComponent},
  {path: 'weather', component: WeatherPageComponent},
  {path: 'posts/:id',component: PostDetailsComponent},
  {path: 'add-form',component: AddFormComponent},
  {path: 'login',component: LoginPageComponent},
  {path: 'registration',component: RegistrationPageComponent},
  {path: 'cdk',component: CdkTasksComponent},
  {path: 'cdk/table',component: TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
