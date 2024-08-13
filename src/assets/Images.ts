import LS1 from "./LS1.jpg";
import LS2 from "./LS2.jpg";
import LS3 from "./LS3.jpg";
import LS4 from "./LS4.jpg";
import PR1 from "./PR1.jpg";
import PR2 from "./PR2.jpg";
import PR3 from "./PR3.jpg";
import PR4 from "./PR4.jpg";

// import M & N album

import img_1 from "./m&n/img_1.jpg";
import img_2 from "./m&n/img_2.jpg";
import img_3 from "./m&n/img_3.jpg";
import img_4 from "./m&n/img_4.jpg";
import img_5 from "./m&n/img_5.jpg";
import img_6 from "./m&n/img_6.jpg";
import img_7 from "./m&n/img_7.jpg";
import img_8 from "./m&n/img_8.jpg";
import img_9 from "./m&n/img_9.jpg";
import img_10 from "./m&n/img_10.jpg";
import img_11 from "./m&n/img_11.jpg";


export const images = [
    LS1, LS2, LS3, LS4
]


export const images2 = [PR1, PR2, PR3, PR4];

export const maneeshaNethupaAlbum = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11,img_1,]

let albumLength = maneeshaNethupaAlbum.length



 export const formatAlbumHandler3 = (album:Array<any>) => {
    let albumLength = album.length;
    const quotient = Math.floor(albumLength / 3);
    let formatedAlbum: any = { "one": [], "two": [], "three": [], };
    for (let i = 0; i < albumLength; i++) {
        if ((i < quotient) ) {
           
            formatedAlbum = { ...formatedAlbum, one: [...formatedAlbum.one, album[i]] }
        } else if ((i >= quotient) && (i < (quotient * 2))) {
         
            formatedAlbum = { ...formatedAlbum, two: [...formatedAlbum.two, album[i]] }
        } else {
            formatedAlbum = { ...formatedAlbum, three: [...formatedAlbum.three, album[i]] }
        }
    }
    // console.log("formatAlbumHandler3",formatedAlbum)
    return formatedAlbum
}

 export const formatAlbumHandler2 = (album:Array<any>) => {
    let albumLength = album.length
    const quotient = Math.floor(albumLength / 2);
    let formatedAlbum: any = { "one": [], "two": [] };
    for (let i = 0; i < albumLength; i++) {
        if ((i < quotient) ) {
         
            formatedAlbum = { ...formatedAlbum, one: [...formatedAlbum.one, album[i]] }
        }  else {
            formatedAlbum = { ...formatedAlbum, two: [...formatedAlbum.two, album[i]] }
        }
    }

    // console.log("formatAlbumHandler2",formatedAlbum)

    return formatedAlbum
}

