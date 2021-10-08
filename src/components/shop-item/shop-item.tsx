import react from 'react';
import { Button } from '@mui/material';
import {ShopItem} from '../../features/shopItems/shopItemsSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToBasket } from '../../features/shopItems/basketSlice';
import './shop-item.scss';
import Card from '../card';

type Props = {
    name: string;
    item: ShopItem;
}

const ShopItemComponent = ({item, name}: Props) => {
    const dispatch = useAppDispatch();
    const requestedStock = useAppSelector(state => state.basket.items[name])
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
        <Card>
            <div className="flex">
                <div>
                    <div><strong className="item-title">{name}</strong></div>
                    <div>Available: {item.stock}</div>
                </div>
                <div className="right">
                    <Button 
                    disabled={item.stock <= requestedStock}
                    sx={{marginBottom: 1}}
                    variant="contained" 
                    onClick={AddToBasket}> + </Button>
                    <div>Cost: {SanatiseCurrency(item.value)}</div>
                </div>
            </div>
        </Card>
    )
}

export default ShopItemComponent;