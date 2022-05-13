import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      hasil: 0,
    };
  }

  hitungLuas = () => {
    let hasil = parseFloat(this.state.panjang) * parseFloat(this.state.lebar);
    this.setState({hasil: hasil});
  };

  hitungKeliling = () => {
    let hasil =
      2 * parseFloat(this.state.panjang) + 2 * parseFloat(this.state.lebar);
    this.setState({hasil: hasil});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* Ini adalah Header*/}
        <View
          style={{
            flex: 1,
            backgroundColor: '#557B83',
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Menghitung Persegi Panjang
          </Text>
        </View>
        <View
          style={{
            flex: 10,
            backgroundColor: '#E5EFC1',
          }}>
          <TextInput
            value={this.state.panjang}
            style={{
              marginHorizontal: 30,
              marginTop: 30,
              paddingHorizontal: 20,
              backgroundColor: '#557B83',
              color: 'white',
              borderRadius: 15,
            }}
            placeholder="Input Nilai Panjang"
            placeholderTextColor="white"
            keyboardType="number-pad"
            onChangeText={value => this.setState({panjang: value})}
          />
          <TextInput
            value={this.state.lebar}
            style={{
              marginHorizontal: 30,
              marginTop: 20,
              paddingHorizontal: 20,
              backgroundColor: '#557B83',
              color: 'white',
              borderRadius: 15,
            }}
            placeholder="Input Nilai Lebar"
            placeholderTextColor="white"
            keyboardType="number-pad"
            onChangeText={value => this.setState({lebar: value})}
          />
          {/* Luas */}
          <TouchableOpacity
            style={{
              backgroundColor: '#39AEA9',
              marginTop: 30,
              marginHorizontal: 50,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 15,
            }}
            onPress={() => this.hitungLuas()}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Hitung Luas
            </Text>
          </TouchableOpacity>
          {/* Keliling */}
          <TouchableOpacity
            style={{
              backgroundColor: '#39AEA9',
              marginTop: 10,
              marginHorizontal: 50,
              paddingVertical: 10,
              paddingHorizontal: 15,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
              }}
              onPress={() => this.hitungKeliling()}>
              Hitung Keliling
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              paddingVertical: 50,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 45,
              }}>
              {this.state.hasil}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#39AEA9',
            elevation: 10,
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 10,
          }}>
          {/*ini adalah footer */}
          <Text
            style={{
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Copyright Arya Prianda
          </Text>
        </View>
      </View>
    );
  }
}

export default App;
