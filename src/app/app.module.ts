import { SummaryPipe } from './section-one-until-section-five/pipes/summary.pipe';
import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './section-one-until-section-five/author/author.component';
import { AuthorService } from './section-one-until-section-five/author/author.service';
import { CoursesComponent } from './section-one-until-section-five/courses/courses.component';
import { MyFavoriteComponent } from './section-one-until-section-five/my-favorite/my-favorite.component';
import { InputPipeCustomizedComponent } from './section-six/input-pipe-customized/input-pipe-customized.component';
import { TitleCasePipe } from './section-one-until-section-five/pipes/title-case-pipe';
import { FavoriteComponent } from './section-one-until-section-five/favorite/favorite.component';
import { PanelComponent } from './section-one-until-section-five/panel/panel.component';
import { LikeComponent } from './section-one-until-section-five/like/like.component';
import { NgIfNgTemplateComponent } from './section-six/ng-if-ng-template/ng-if-ng-template.component';
import { NgSwitchCaseComponent } from './section-six/ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './section-six/ng-for/ng-for.component';
import { NgStyleComponent } from './section-six/ng-style/ng-style.component';
import { SafeTraversalOperatorComponent } from './section-six/safe-traversal-operator/safe-traversal-operator.component';
import { InputFormatDirective } from './section-six/input-format.directive';
import { ActivitySectionSixComponent } from './section-six/activity-section-six/activity-section-six.component';
import { ZippyComponent } from './section-six/zippy/zippy.component';
import { ContactFormComponent } from './section-seven/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    CoursesComponent,
    SummaryPipe,
    MyFavoriteComponent,
    InputPipeCustomizedComponent,
    TitleCasePipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    NgIfNgTemplateComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgStyleComponent,
    SafeTraversalOperatorComponent,
    InputFormatDirective,
    ActivitySectionSixComponent,
    ZippyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
