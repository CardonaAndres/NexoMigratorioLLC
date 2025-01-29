import { Users, Home, Briefcase, Shield, Flag, UserPlus} from 'lucide-react';

export const useServices = () => {

    const services = [
        {
            title: 'Asilo y Parole Humanitario',
            description: 'Procesos migratorios clave como el asilo y el Parole Humanitario, ambos enfocados en permitir la permanencia en EE.UU. mediante el cumplimiento de ciertos requisitos.',
            moreInfo: '',
            icon: <Users size={24} />
        },
        {
            title: 'Residencia Permanente y Ciudadanía',
            description: 'El ajuste de estatus es esencial para lograr la residencia permanente. Además, el Estatus de Protección Temporal (TPS) permite regularizar la situación migratoria bajo ciertos requisitos.',
            moreInfo: '',
            icon: <Home size={24} />
        },
        {
            title: 'Permiso de Trabajo y Visas',
            description: 'Trámite para obtener permiso de trabajo legalmente en EE.UU., junto con los servicios de preparación y presentación de solicitudes para una amplia variedad de visas, para usted o sus familiares.',
            moreInfo: '',
            icon: <Briefcase size={24} />
        },
        {
            title: 'Petición Familiar',
            description: 'Proceso migratorio para que ciudadanos y residentes de EE.UU. puedan traer a un familiar extranjero legalmente',
            moreInfo: '',
            icon: <UserPlus size={24} />
        },
        {
            title: 'Parole con ICE y Aplicación por Bajos Recursos',
            description: 'El parole con el Servicio de Inmigración y Control de Aduanas (ICE) permite beneficios importantes. Además, ofrecemos ayuda con las tarifas gubernamentales a través de una aplicación por bajos recursos.',
            moreInfo: '',
            icon: <Shield size={24} />
        },
        {
            title: 'TPS y Visas',
            description: 'El TPS permite a personas de ciertos países regularizar su situación migratoria en EE.UU., mientras que ofrecemos diversos tipos de visas tanto para individuos como para sus familiares o amigos.',
            moreInfo: '',
            icon: <Flag size={24} />
        }
    ];

    return {
        services
    }
}

