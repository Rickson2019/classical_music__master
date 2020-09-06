import cecile_chaminade_IMG from './French/Cecile Chaminade.jpg'
import georges_bizet_IMG from './French/Georges Bizet.jpg'

import rimsky_korsakov_IMG from './Russian/Rimsky-Korsakov.jpg'
import sergei_prokofiev_IMG from './Russian/Sergei_Prokofiev.jpg'

var pieces =  require('./pieces')

// 变量名应该如何起名字
export var cecile_chaminade =  {
    name : 'Cecile Chaminade',
    era: [1857, 1944],
    style: ['late-Romantic'],
    pieces: [pieces.flute_concertino_in_D_major_Op_107],
    image: cecile_chaminade_IMG
}


 const Georges_Bizet =  {
    name : 'Georges Bizet',
    era: [1857, 1944],
    style: ['Romantic'],
    pieces: [],
    image: georges_bizet_IMG
}


export const french = {
    cecile_chaminade,
    Georges_Bizet
}

const russian = {
    'Rimsky Korsakov': {
        name : 'Nikolai Rimsky-Korsakov',
        era: [1844, 1908],
        style: ['Romantic'],
        pieces: ["Boston Philharmonic Youth Orchestra_ Chaminade - Concertino for Flute"],
        image: rimsky_korsakov_IMG
    },
    'Sergei Prokofiev': {
        era: [1891, 1953],
        style: ['Romantic'],
        image: sergei_prokofiev_IMG
    },
}



export const composers = {
    'French Composers' : french,
    'Russian Composers' : russian,
}


