import { Fan } from "./fan";
import { Variant } from "./variant";

export interface Savol{
    id: number,
    matn: string,
    variantlar: Variant[],
    fan: Fan,
}