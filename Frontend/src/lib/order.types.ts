import { OrderItemProps } from "@/provider/order";
export interface OrderProps{
    id: string;
    table:number;
    name: string;
    draft: Boolean;
    status: Boolean;

    items?: OrderItemProps[];
}

