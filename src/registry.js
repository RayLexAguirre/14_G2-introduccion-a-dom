export default class Registry{
    constructor(){
        this._list = new Array();
    }

    add(participant){
        let pos = this._findParticipant(participant);

        if(pos >= 0){
            return false;
        }

        this._list.push(participant);
            
        return true;
    }

    _findParticipant(participant){
        let pos = this._list.findIndex( (p) => {
            if(p.getId() === participant.getId()){
                return true;
            } else {
                return false;
            }
        });

        return pos;
    }
}