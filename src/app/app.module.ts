import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { PresupuestoValorComponent } from './presupuestos/presupuesto-valor/presupuesto-valor.component';
import { PresupuestosValoresComponent } from './presupuestos/presupuestos-valores/presupuestos-valores.component';
import { PresupuestoIngresoComponent } from './presupuestos/presupuestos-valores/presupuesto-ingreso/presupuesto-ingreso.component';
import { PresupuestoEgresoComponent } from './presupuestos/presupuestos-valores/presupuesto-egreso/presupuesto-egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PanelComponent } from './panel/panel.component';
import { IngresosComponent } from './panel/ingresos/ingresos.component';
import { EgresosComponent } from './panel/egresos/egresos.component';

@NgModule({
  declarations: [
    AppComponent,
    PresupuestosComponent,
    PresupuestosValoresComponent,
    PresupuestoValorComponent,
    PresupuestoIngresoComponent,
    PresupuestoEgresoComponent,
    FormularioComponent,
    PanelComponent,
    IngresosComponent,
    EgresosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
