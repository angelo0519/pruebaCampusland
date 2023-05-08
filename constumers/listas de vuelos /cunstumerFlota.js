export class ListasFlota extends HTMLElement{

    constructor(){
        super();
        this.render();

    }
    render() {
        this.innerHTML = /* html */`
        <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>trabajadores </th>
                    <th>cargo</th>    
                    <th>aerolinea</th>
                </tr>
            </thead>
            <tbody id="lista-clientes">

            </tbody>
        </table>
    </div>
    `;
    }
}
customElements.define("listas-flota", ListasFlota);