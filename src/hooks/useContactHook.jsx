import { useForm } from "react-hook-form";
import { successAlert, errorAlert } from "../components/common/Alerts";
import emailjs from 'emailjs-com';
import Cookies from 'js-cookie';

export const useContactHook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
         mode: 'onChange'
    });

    const sendEmail = async (userData) => {
        try {
            const sent = Cookies.get('sent');

            if (sent) {
                errorAlert('Ya has enviado un mensaje, debes esperar una hora para enviar otro.');
                return;
            }

            const { name, phone, message } = userData;

            await emailjs.send(
                'service_kn9s4ad', 'template_86cv7no', {
                    name, phone, message
                } , 'gXVD13EmkWvBgwp1-'
            )

            Cookies.set('sent', 'true', { expires: 1/24 });
            successAlert();
            
        } catch (err) {
            errorAlert();
        } finally {
            reset();
        }
    }

    return {
        register, handleSubmit, errors, sendEmail
    }
}
