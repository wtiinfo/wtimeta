import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/user-icon.svg';
import { Sale } from '../../models/sale';
import { BASE_URL } from '../../utils/resquest';
import './styles.css';

type Props = {
    //saleId: number;
    sale: Sale;
}

function handleClick(sale: Sale) {
    axios(`${BASE_URL}/sales/${sale.id}/notification`)
    .then(response => {
        toast.info(`SMS enviado com sucesso para o vendedor: ${sale.sellerName}`);
    });
}

function NotificationButton({sale} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(sale)}>
            <img src={icon} alt="notification" />
        </div>
    )
}

export default NotificationButton;