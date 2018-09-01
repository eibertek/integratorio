import { CARD_UPLOAD_PENDING } from "./cardActions";

export default (state = {}, action) => {
    switch(action.type) {
        case CARD_UPLOAD_PENDING:
            console.log(action);
            return { ...state, cardUpload: action.newFile };
        default:
            return state;    
    }
}
