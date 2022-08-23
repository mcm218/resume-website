import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { EducationCardComponent } from './education-card/education-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    SkillsListComponent,
    ExperienceListComponent,
    ExperienceCardComponent,
    SkillCardComponent,
    EducationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
