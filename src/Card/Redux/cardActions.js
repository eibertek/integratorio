export const CARD_UPLOAD_PENDING = '[CARD] card upload';
export const CARD_UPLOAD_SUCCESS = '[CARD] card upload success';
export const CARD_UPLOAD_FAILURE = '[CARD] card upload failure';

export const cardUpload = newFile => dispatch => 
{
    dispatch(cardUploadPending(newFile));
}


export const cardUploadPending = newFile => ({
    type: CARD_UPLOAD_PENDING,
    newFile,
});

export const cardUploadSuccess = () => ({
    type: CARD_UPLOAD_SUCCESS,
})