import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator 
            drawerContent={CustomDrawer}
        >
            <Drawer.Screen 
                name="Home"
                component={Home}
                options={{
                    title: 'Minha Cidade'
                }}
            />

            <Drawer.Screen 
                name="Search"
                component={Search}
                options={{
                    title:'Procurar'
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;