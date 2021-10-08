import react from 'react';
import { Button } from '@mui/material';
import {ShopItem} from '../features/shopItems/shopItemsSlice';
import { useAppDispatch } from '../app/hooks';
import { addToBasket } from '../features/shopItems/basketSlice';
import './shop-item.css';

type Props = {
    name: string;
    item: ShopItem;
}

const ShopItemComponent = ({item, name}: Props) => {
    const dispatch = useAppDispatch();
    const AddToBasket = () => {
        dispatch(addToBasket(name))
    }

    function SanatiseCurrency(value: number) {
        return (value / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'GBP'
        })
    }

    return (
        <div className="card">
            <div className="flex">
                <div>
                    <div><strong className="item-title">{name}</strong></div>
                    <div>Available: {item.stock}</div>
                </div>
                <div className="right">
                    <Button variant="contained" onClick={AddToBasket}> + </Button>
                    <div>Cost: {SanatiseCurrency(item.value)}</div>
                </div>
            </div>
        </div>
    )
}

export default ShopItemComponent;