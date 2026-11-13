import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Usuarios from '../screens/usuarios';
import NuevoPost from '../screens/nuevoPost';

const Tab = createBottomTabNavigator();

function HomeMenu() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />
        }}
      />

      <Tab.Screen name="Usuarios" component={Usuarios} />
      <Tab.Screen name="Nuevo post" component={NuevoPost} />
    </Tab.Navigator>
  );
}

export default HomeMenu;