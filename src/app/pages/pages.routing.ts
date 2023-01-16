import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DeshboardComponent } from './deshboard/deshboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
    {
        path: "deshboard", component: PagesComponent, children: [
            { path: "", component: DeshboardComponent },
            { path: "progress", component: ProgressComponent },
            { path: "grafica", component: Grafica1Component },
            { path: "", redirectTo: "/deshboard", pathMatch: "full" }
        ]
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutngModule { }