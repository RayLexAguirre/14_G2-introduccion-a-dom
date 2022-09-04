import Participant from "./participant.js"
import Registry from "./registry.js"

class App{
    constructor(){
        this._btnRegister = document.querySelector("#btnRegister");
        this._table = document.querySelector("#registry")
        this._btnRegister.addEventListener("click", this.readForm);
        this._registry = new Registry();
    }

    readForm = () => {
        let participant = Participant.read();
    
        if(participant === false){
            Swal.fire(
                'Error',
                'Todos los campos son requeridos',
                'error'
              );
              return;
        }
        let result = this._registry.add(participant);

        if(result === false){
            swal.fire("Error", "Este usuario ya fue registrado", "error");
            return;
        }

        this._addToTable(participant)
            Swal.fire(
                'CORRECTO',
                'Registro completo',
                'success'
              )
    }

    _addToTable(participant){
        let row = this._table.insertRow(-1);

        let colId = row.insertCell(0);
        let colName = row.insertCell(1);
        let colAge = row.insertCell(1);

        colId.innerHTML = participant.getId();
        colName.innerHTML = participant.getName();
        colAge.innerHTML = participant.getAge();

    }
}

new App();
