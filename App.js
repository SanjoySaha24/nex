import React from 'react';
import { Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Eshlie Alcantaro</Text>
      <Text style={{fontSize: 18}}>Cupertino   Female, 25</Text>
    
      <Text style={{fontSize: 30}}>Services</Text>
      <View>
      <Image
          source={require('./pic/up.png')} 
        />
      </View>
      <Text style={{fontSize: 18}}>Upcoming Schedule</Text>
      <View>
      <Image
          source={require('./pic/pal.png')} 
        />
      </View>
      <Text style={{fontSize: 18}}>Your daily report</Text>
      <View>
      <Image
          source={require('./pic/track.png')} 
        />
      </View>
    </View>
  );
}
export default App;


