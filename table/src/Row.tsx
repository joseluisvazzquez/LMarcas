import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
function Row({ componente }: { componente: { name: string; Bodytype: string; Cuteness: number; Country: string; Image: string; Bites: boolean } }) {
    return (
        <tr >
            <th>{componente.name}</th>
            <th>{componente.Bodytype}</th>
            <th>{componente.Cuteness}</th>
            <th>{componente.Country}</th>
            <th><img src={componente.Image} style={{width:"100px" , height:"100px"}} className="rounded-circle"></img></th>
            <th>{componente.Bites ? "YES" : "NO"}</th>
        </tr>
    );
} export default Row;