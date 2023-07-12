import { IProductoViewModel } from "./iproducto-viewmodel";
import { IRentaViewModel } from "./irenta-view-model";

export interface ISolicitudViewModel {
    id: number;
    activo: boolean;
    estatus: string;
    transaccion: string;
    cliente: string;
    identificacion: string;
    producto: IProductoViewModel,
    renta: IRentaViewModel
}
