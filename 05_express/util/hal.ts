import {Resources} from "../model/Types";

function addSelf(href: String): Resources {
    return {
        "_links": {
            "self": {
                "href": `http://localhost:3000/api${href}`
            }
        }
    };
}

export {addSelf};