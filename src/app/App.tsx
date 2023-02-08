import "app/styles/index.scss"
import { classNames } from 'shared/lib/classNames/classNames';
import { useThemes } from 'app/providers/themeProvider';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'wigets/Navbar';
import { Sidebar } from 'wigets/SideBar';
import { Suspense } from 'react';


const App = () => {
    const { theme } = useThemes()

    return ( 
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback=" ">
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
            </Suspense>
        </div>
        
     );
}
 
export default App;