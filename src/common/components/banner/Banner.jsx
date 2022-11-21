import React from 'react'
import Image from './components/Image'
import Type from './components/Type'
import Title from './components/Title'
import Description from './components/Description'
import Buttons from './components/Buttons'
import ButtonCirc from './components/ButtonCirc'
import Classification from './components/Classification'
import {BannerContainer} from './styles/BannerContainer'
import {faVolumeMute} from '@fortawesome/free-solid-svg-icons'

const Banner = ({data}) => {
    return (
        <BannerContainer image={data?.backdrop}>
            <Image />
            <Type />
            <Title titulo='Encanto'/>
            <Description texto='Cuenta la historia de una familia extraordinaria, los Madrigal, que viven escondidos en las montañas de Colombia, en una casa mágica situada en un enclave maravilloso llamado Encanto. La magia de Encanto ha dotado a todos los niños de la familia un don único, desde la súper fuerza hasta el poder de curar... Pero se olvidó de un miembro de la familia: Mirabel. Cuando ésta descubre que la magia que rodea Encanto está en peligro, decide que ella, la única Madrigal normal, podría ser la última esperanza de su extraordinaria familia.'/>
            <Buttons />
            <ButtonCirc icono = {faVolumeMute} color='white' background="#45454590"/>
            <Classification edad='13'/>
        </BannerContainer>
    );
};

export default Banner