import * as functions from 'firebase-functions';
import * as cors from 'cors';
const corsHandler = cors({origin: true});
export const helloWorld = functions.https.onRequest((request, response) => {
    corsHandler(request, response, () => {
        response.json({
            message:"Hello from Cloud Function"
        });
    });
});
