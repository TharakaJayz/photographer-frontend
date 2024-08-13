import { images } from "./Images"

export interface Album {
    name: string;
    type: string;
    imgUrl: string;
}



export const albumTypes = [
    "Weddings","Engagements","Pre-shoots"
]


export const albums:Album[] = [
    {
        name:"prabhath &Lakshi",
        type:albumTypes[2],
        imgUrl:images[0]
    },
    {
        name:"Tharaka &Lakshi",
        type:albumTypes[0],
        imgUrl:images[2]
    },
    {
        name:"Pathum &Lakshi",
        type:albumTypes[1],
        imgUrl:images[1]
    },
    {
        name:"Sineth &Lakshi",
        type:albumTypes[1],
        imgUrl:images[0]
    },
    {
        name:"Dilini & Pravindu",
        type:albumTypes[2],
        imgUrl:images[1]
    },
    {
        name:"supun & Lakshi",
        type:albumTypes[0],
        imgUrl:images[2]
    },
    {
        name:"Sudam & Hashini",
        type:albumTypes[1],
        imgUrl:images[0]
    },
]