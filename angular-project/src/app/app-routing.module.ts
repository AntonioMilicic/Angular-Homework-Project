import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "product/:id", component: ProductDetailComponent },
  { path: "products", component: ProductsListComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
