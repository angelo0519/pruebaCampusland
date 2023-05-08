export class ListasVuelos extends HTMLElement{

    constructor(){
        super();
        this.render();

    }
    render() {
        this.innerHTML = /* html */`
        <div class="container">
        <table class="table table-striped" id="rutaAerea">
            <thead>
                <tr>
                    <th>Id de vuelo</th>
                    <th>lugar de inicio</th>    
                    <th>lugar de llegada</th>
                    <th>hora de salida </th>
                </tr>
            </thead>
        </table>
        
    </div>
    `;
    }
    
}
customElements.define("listas-vuelos", ListasVuelos);