import { CurrencyPipe, DecimalPipe } from "@angular/common";

export interface ICategorias{
    id: number;
    title: string;
    category:string;
    price: CurrencyPipe;
    
}