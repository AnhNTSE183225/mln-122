import { Header } from './Header'
import { Outlet } from 'react-router'

export const Protected = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}