import react from 'react';
import { Button } from '@mui/material';
import {ShopItem} from '../features/shopItems/shopItemsSlice';
import { useAppDispatch } from '../app/hooks';
import { addToBasket, removeFromBasket } from '../features/shopItems/basketSlice';

type Props = {
    name: string;
    item: ShopItem;
}

const ShopItemComponent = ({item, name}: Props) => {
    const dispatch = useAppDispatch();
    const AddToBasket = () => {
        console.log('oi')
        dispatch(addToBasket(name))
    }

    const RemoveFromBasket = () => {
        dispatch(removeFromBasket(name))
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '#ccc 3px 6px 6px 0px',
            margin: '10px'
        }}>
            <div>{name}, stock: {item.stock}, value: {item.value}</div>
            <div>
                <Button sx={{marginX: 1}} variant="contained" onClick={RemoveFromBasket}> - </Button>
                <Button sx={{marginX: 1}} variant="contained" onClick={AddToBasket}> + </Button>
            </div>
        </div>
    )
}

export default ShopItemComponent;