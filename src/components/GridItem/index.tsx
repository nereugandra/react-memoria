import { GridItemType } from '@/types/GridItemType'
import * as C from './styles'
import Image from 'next/image'
import b7Svg from '@/svgs/b7.svg'
import { items } from '@/data/items'

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}
            showBackground={item.permanentShown || item.shown}
        >
            {item.permanentShown === false && item.shown === false &&
                <Image
                    src={b7Svg}
                    alt=''
                    className='w-10 h-10 opacity-10'
                />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <Image
                    src={items[item.item].icon}
                    alt=''
                    className='w-10 h-10'
                />
            }
        </C.Container>
    )
}