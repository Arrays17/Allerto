import React from 'react'
import Landslide from '../assets/allertips_images/svg/hill-rockslide.svg'
import Earthquake from '../assets/allertips_images/svg/house-crack.svg'
import Fire from '../assets/allertips_images/svg/house-fire.svg'
import Flood from '../assets/allertips_images/svg/house-flood-water.svg'
import Typhoon from '../assets/allertips_images/svg/hurricane.svg'
import Choking from '../assets/allertips_images/svg/lungs.svg'
import Fainting from '../assets/allertips_images/svg/person-falling.svg'
import Volcano from '../assets/allertips_images/svg/volcano.svg'
import AED from '../assets/allertips_images/svg/heart-circle-bolt.svg'

export function randomCode(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
}

export function getIcon(name) {
    let Icon

    switch (name) {
        case 'house-crack': 
            Icon = <Earthquake width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'hill-rockslide': 
            Icon = <Landslide width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'house-fire': 
            Icon = <Fire width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'house-flood-water': 
            Icon = <Flood width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'hurricane': 
            Icon = <Typhoon width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'lungs': 
            Icon = <Choking width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'person-falling': 
            Icon = <Fainting width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'volcano': 
            Icon = <Volcano width={90} height={90} fill={'#ffdec4'}/>
            break;
        case 'aed': 
            Icon = <AED width={90} height={90} fill={'#ffdec4'}/>
            break;
        default:
            break;
    }

    return Icon
}