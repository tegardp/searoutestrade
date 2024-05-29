import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsappFloating() {
    return (
        <a href="https://wa.me/+6281315251047?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20products." target="_blank" className="fixed size-16 right-20 bottom-10 bg-green-500 rounded-full text-white p-2.5 z-50 flex item-center justify-center hover:shadow-lg">
            <FontAwesomeIcon icon={faWhatsapp} />
        </a>
    )
}