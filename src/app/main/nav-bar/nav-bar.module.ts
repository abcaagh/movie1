import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SingleGenreComponent } from '../single-genre/single-genre.component';

const routes: Routes = [
    {path: '', component: SingleGenreComponent}
]
@NgModule({
    imports: [
        RouterModule.forChild(routes), 
        CommonModule,
    ],
    exports: [
        RouterModule
    ]
})
export class NavbarModule{}