import Link from 'next/link'

export const Menu: React.FC = () => {
    return(
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">Minhas vendas</p>
            <ul>
                <MenuItem href='/' label='Home'/>
                <MenuItem href='/' label='Registers'/>
                <MenuItem href='/' label='Config'/>
                <MenuItem href='/' label='Exit'/>
            </ul>
        </aside>
    )
}

interface MenuItemsProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemsProps> = (props: MenuItemsProps) =>{
    return(
        <li>
            <Link href={ props.href }>
                <a>
                    <span className="icon"></span>{ props.label } 
                </a>
            </Link>
        </li>
    )
}