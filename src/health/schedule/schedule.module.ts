import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

// containers
import { ScheduleComponent } from "./containers/schedule/schedule.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: ScheduleComponent
  }
];

@NgModule({
  declarations: [ScheduleComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ROUTES)]
})
export class ScheduleModule {}
