import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SearchComponent } from "./search/search.component";
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductComponent } from "./product/product.component";
import { RatingsComponent } from "./ratings/ratings.component";
import { HomeComponent } from "./home/home.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductService } from "./service/product.service";
import { SearchfilterPipe } from './pipe/searchfilter.pipe';
import { TestPipe } from './pipe/test.pipe';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "product/:productId", component: ProductDetailComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SlideshowComponent,
    FooterComponent,
    ProductComponent,
    RatingsComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    SearchfilterPipe,
    TestPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
