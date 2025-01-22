import { Helmet } from 'react-helmet-async';
import { BASE_URL } from '../../configs/config.js';

export const MetaTags = () => (
    <Helmet>
        {/* Meta Descripción */}
        <meta 
            name="description" 
            content="Obtén asesoría completa y personalizada para tu proceso migratorio en Estados Unidos. Nexo Migratorio LLC te guía en cada paso. Contáctanos hoy mismo." 
        />
        <meta 
            name="keywords" 
            content="asesoría migratoria, proceso migratorio, inmigración Estados Unidos, visa, green card, ciudadanía, Nexo Migratorio, consultoría migratoria, inmigración a EE.UU., visa de trabajo, green card, ciudadanía americana, Nexo Migratorio LLC" 
        />
        {/* Canonical */}
        <link rel="canonical" href={`${BASE_URL}`} />
        {/* Open Graph para Redes Sociales */}
        <meta property="og:title" 
            content="Asesoría Migratoria Personalizada en EE.UU. | Nexo Migratorio LLC" />
        <meta property="og:description" content="Descubre cómo Nexo Migratorio LLC puede ayudarte a gestionar tu proceso migratorio en EE.UU. de manera personalizada y profesional." />
        <meta property="og:url" content={`${BASE_URL}`} />
        <meta property="og:image" content={`${BASE_URL}/assets/LogoIMG.png`} />
        <meta property="og:type" content="website" />


        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
);