import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../../common/share/shared/shared.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { ListComponent } from './left-control/list/list.component';
@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
