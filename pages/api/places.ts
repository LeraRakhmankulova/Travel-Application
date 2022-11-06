import type {NextApiRequest, NextApiResponse} from 'next'
import {IPlace} from "../../models/interfaces/place.interface";

const places: IPlace[] = [{
    slug: 'Tokio',
    location: {
        country: 'Japan',
        city: 'Tokio'
    },
    imagePath: 'http://localhost:3000/images/japan.jpg',
    description: '',
    rating: 10,
    duration: '',
    distance: '20',
    googleMapLink: '',
    mapImage: ''
}, {
    slug: 'Paris',
    location: {
        country: 'France',
        city: 'Paris'
    },
    imagePath: 'http://localhost:3000/images/usa.jpg',
    description: '',
    rating: 10,
    duration: '',
    distance: '20',
    googleMapLink: '',
    mapImage: ''
}]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}