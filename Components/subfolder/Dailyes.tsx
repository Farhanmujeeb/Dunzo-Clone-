import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Modal,
} from 'react-native';
import {Data, Footer, Lays, Prods, needs, pack} from './Products';
import {NavigationProp} from '@react-navigation/native';
import Login from './Login';
import {useCart} from '../ShopContext';

type DailyesProps = {
  navigation: NavigationProp<any>;
};

const Dailyes: React.FC<DailyesProps> = ({navigation}) => {
  const {addToCart} = useCart();
  const loginPress = () => {
    navigation.navigate('Login');
  };
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isEnjoyModalVisible, setEnjoyModalVisible] = useState(false);
  const openLogin = () => {
    setLoginVisible(true);
  };
  const closeLogin = () => {
    setLoginVisible(false);
  };

  const showEnjoyModal = () => {
    setEnjoyModalVisible(true);
    setTimeout(() => {
      setEnjoyModalVisible(false);
    }, 700);
  };

  return (
    <View style={styles.container}>
      <Login isVisible={isLoginVisible} onClose={closeLogin} />
      <View style={styles.nav}>
        <View style={styles.search}>
          <TextInput placeholder="Search" />
          <Image
            style={styles.searchIcon}
            source={require('../aseets/glass.png')}
          />
        </View>
        <View style={styles.imglogin}>
          <TouchableOpacity onPress={openLogin}>
            <Image
              style={styles.userIcon}
              source={require('../aseets/user.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.homescroll}>
        <View style={styles.fimgd}>
          <Image
            style={styles.fimg}
            source={require('../aseets/grocery.webp')}
          />
        </View>
        <View style={styles.spotv}>
          <Text style={styles.spott}>In spotlight</Text>
          <TouchableOpacity onPress={() => navigation.navigate('View')}>
            <Text style={styles.spottt}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.scrollm}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {Data.map(item => (
            <View style={styles.mapitems} key={item.id}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {itemId: item.id});
                }}>
                <Image style={styles.productImage} source={item.Image} />
              </TouchableOpacity>
              <View style={styles.maptext}>
                <View>
                  <Text style={{color: 'black', fontSize: 15}}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'grey'}}>{item.kg}</Text>
                  <Text
                    style={{fontSize: 18, fontWeight: '500', color: 'green'}}>
                    ${item.price}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    addToCart(item.id);
                    showEnjoyModal();
                  }}
                  style={styles.addbut}>
                  <Text style={{fontWeight: '500'}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
        <View
          style={{backgroundColor: 'white', borderRadius: 15, elevation: 5}}>
          <ScrollView
            style={styles.scrollimg}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/one.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/two.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/three.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/four.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/five.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/six.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/seven.jpg')}
            />
            <Image
              style={{
                width: 370,
                height: 150,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/eight.jpg')}
            />
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            elevation: 5,
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
            height: 175,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '500',
              marginRight: 210,
            }}>
            Freshest Picks
          </Text>
          <ScrollView
            style={{marginTop: 16}}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <Image
              style={{
                width: 300,
                height: 120,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/nine.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 120,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/ten.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 120,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/eleven.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 120,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/twelve.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 120,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/thirteen.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 120,
                borderRadius: 15,
                marginLeft: 20,
              }}
              source={require('../Images/fourteen.jpg')}
            />
          </ScrollView>
        </View>
        <View
          style={{
            height: 450,
            backgroundColor: 'white',
            marginTop: 10,
            justifyContent: 'space-around',
            elevation: 4,
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                marginLeft: 10,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Shop By Category
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                height: 120,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  // backgroundColor: 'rgb(242, 242, 242)',
                  width: 90,
                  height: 120,
                  borderRadius: 6,
                }}>
                <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'green',
                      borderWidth: 0.5,
                      borderRadius: 7,
                      width: 65,
                      borderColor: '#a8005d',
                      textAlign: 'center',
                    }}>
                    56% OFF
                  </Text>
                  <Image
                    style={{width: 80, height: 80}}
                    source={require('../Images/img2.png')}
                  />
                </View>
                <Text style={{color: 'black'}}>Beverages</Text>
              </View>

              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  // backgroundColor: 'rgb(242, 242, 242)',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img9.png')}
                />
                <Text style={{color: 'black'}}>Atta,Dal</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'green',
                      borderWidth: 0.5,
                      borderRadius: 7,
                      width: 65,
                      borderColor: '#a8005d',
                      textAlign: 'center',
                    }}>
                    35% OFF
                  </Text>
                  <Image
                    style={{width: 80, height: 80}}
                    source={require('../Images/img11.png')}
                  />
                </View>

                <Text style={{color: 'black'}}>Oil</Text>
              </View>

              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img10.png')}
                />
                <Text style={{color: 'black'}}>Breakfasts</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: 120,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img1.png')}
                />
                <Text style={{color: 'black'}}>Cleaning</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img7.png')}
                />
                <Text style={{color: 'black'}}>Desserts</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img12.png')}
                />
                <Text style={{color: 'black'}}>Instant Foods</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                  <Text
                    style={{
                      backgroundColor: 'white',
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'green',
                      borderWidth: 0.5,
                      borderRadius: 7,
                      width: 65,
                      borderColor: '#a8005d',
                      textAlign: 'center',
                    }}>
                    12% OFF
                  </Text>
                  <Image
                    style={{width: 80, height: 80}}
                    source={require('../Images/img5.png')}
                  />
                </View>

                <Text style={{color: 'black'}}>Personal</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: 120,
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img6.png')}
                />
                <Text style={{color: 'black'}}>Sweets</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img4.png')}
                />
                <Text style={{color: 'black'}}>Breads</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img8.png')}
                />
                <Text style={{color: 'black'}}>Pet Care</Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: 90,
                  height: 110,
                  borderRadius: 6,
                }}>
                <Image
                  style={{width: 80, height: 80}}
                  source={require('../Images/img3.png')}
                />
                <Text style={{color: 'black'}}>Baby Care</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
            backgroundColor: 'white',
            height: 230,
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 370, height: 200, borderRadius: 15}}
            source={require('../Images/onam.webp')}
          />
        </View>
        <View style={{marginTop: 20, backgroundColor: 'white', elevation: 8}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginBottom: 20,
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            QUICK BITE
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Lays.map(items => (
              <View
                style={[styles.cardmap, {backgroundColor: items.color}]}
                key={items.id}>
                <Text style={styles.titlemap}>{items.title}</Text>
                <Text style={styles.infomap}>{items.kg}</Text>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Details', {itemId: items.id})
                  }>
                  <Image style={styles.imagemap} source={items.Image} />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 160,
                  }}>
                  <Text style={styles.pricemap}>${items.price}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      addToCart(items.id);
                      showEnjoyModal();
                    }}
                    style={styles.addbut2}>
                    <Text style={{fontWeight: '500'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.thrdmap}>
          <Text
            style={{
              color: 'black',
              marginBottom: 20,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            MOST POPULAR
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Prods.map(products => (
              <View key={products.id} style={styles.thrdmap1}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {itemId: products.id});
                  }}>
                  <Image style={styles.thrdimg} source={products.Image} />
                </TouchableOpacity>
                <Text style={styles.thrdt1}>{products.title}</Text>
                <Text style={styles.thrdt2}>{products.kg}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 100,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.thrdt3}>${products.price}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      addToCart(products.id);
                      showEnjoyModal();
                    }}
                    style={styles.addbut3}>
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            They Love It Fresh
          </Text>
          <ScrollView horizontal>
            <Image
              style={{
                width: 280,
                height: 150,
                marginLeft: 15,
                borderRadius: 60,
              }}
              source={require('../Images/qoute1.png')}
            />
            <Image
              style={{
                width: 250,
                height: 150,
                marginLeft: 15,
                borderRadius: 60,
              }}
              source={require('../Images/qoute2.png')}
            />
            <Image
              style={{
                width: 230,
                height: 150,
                marginLeft: 15,
                borderRadius: 60,
              }}
              source={require('../Images/qoute3.png')}
            />
            <Image
              style={{
                width: 250,
                height: 150,
                marginLeft: 15,
                borderRadius: 60,
              }}
              source={require('../Images/qoute4.png')}
            />
          </ScrollView>
        </View>

        <View style={styles.container2}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pack.map(allitems => (
              <View
                style={[styles.card, {backgroundColor: allitems.color}]}
                key={allitems.id}>
                <Text style={styles.title}>{allitems.name}</Text>
                <Text style={styles.name}>{allitems.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Details', {itemId: allitems.id});
                  }}>
                  <Image style={styles.image} source={allitems.Image} />
                </TouchableOpacity>

                <Text style={styles.price}>${allitems.price}</Text>
                <Text style={styles.kg}>{allitems.kg}</Text>
                <View style={styles.addContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      addToCart(allitems.id);
                      showEnjoyModal();
                    }}
                    style={styles.addButton}>
                    <Text style={styles.addText}>+Add</Text>
                  </TouchableOpacity>
                  <Text style={styles.variants}>{allitems.variants}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.needcontainer}>
          <Text
            style={{
              color: 'black',
              marginTop: 20,
              marginLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Curated For Your Needs
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.needcardContainer]}>
              {needs.map(allitems => (
                <View
                  key={allitems.id}
                  style={[styles.needcard, {backgroundColor: allitems.color}]}>
                  <Image source={allitems.Image} style={styles.needimage} />
                  <Text style={styles.needtitleHead}>{allitems.titlehead}</Text>
                  <Text style={styles.needtitle}>{allitems.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            marginTop: 15,
            height: 120,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              style={{
                width: 300,
                height: 100,
                marginLeft: 20,
                borderRadius: 9,
                marginTop: 15,
              }}
              source={require('../Images/Snackbanner.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 100,
                marginLeft: 20,
                borderRadius: 9,
                marginTop: 15,
              }}
              source={require('../Images/hitbanner.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 100,
                marginLeft: 20,
                borderRadius: 9,
                marginTop: 15,
              }}
              source={require('../Images/shravanbanner.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 100,
                marginLeft: 20,
                borderRadius: 9,
                marginTop: 15,
              }}
              source={require('../Images/powderbanner.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 100,
                marginLeft: 20,
                borderRadius: 9,
                marginTop: 15,
              }}
              source={require('../Images/fruitbanner.jpg')}
            />
            <Image
              style={{
                width: 300,
                height: 100,
                marginLeft: 20,
                borderRadius: 9,
                marginTop: 15,
              }}
              source={require('../Images/dailyneedbanner.jpg')}
            />
          </ScrollView>
        </View>

        <View style={styles.itemcontainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
              style={{flex: 1}}
              data={Footer}
              renderItem={({item}) => (
                <View style={styles.itemparent}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Details', {itemId: item.id})
                    }>
                    <Image source={item.Image} style={styles.itemimg} />
                  </TouchableOpacity>
                  <Text style={styles.itemtitle}>{item.title}</Text>
                  <Text style={styles.itemkg}>{item.kg}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 100,
                    }}>
                    <Text style={styles.itemprice}>${item.price}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        addToCart(item.id);
                        showEnjoyModal();
                      }}
                      style={styles.addbut3}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        </View>

        <View
          style={{
            backgroundColor: '#F8BBD0',
            elevation: 5,
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 350, height: 200, borderRadius: 25}}
            source={require('../Images/customs.jpg')}
          />
        </View>
      </ScrollView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isEnjoyModalVisible}
          onRequestClose={() => {
            setEnjoyModalVisible(false);
          }}>
          <View style={styles.enjoyModalContainer}>
            <View style={styles.enjoyModalContent}>
              <Text style={styles.enjoyModalText}>Item Added</Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#128C7E',
    height: 65,
    elevation: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  search: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 20,
    height: 50,
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 250,
  },
  userIcon: {
    width: 30,
    height: 30,
    marginTop: 7,
  },
  fimg: {
    width: 360,
    height: 250,
    borderRadius: 20,
  },
  fimgd: {
    backgroundColor: 'white',
    height: 280,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spotv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 15,
  },
  spott: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
  spottt: {
    color: 'green',
  },
  scrollm: {
    marginTop: 15,
    paddingHorizontal: 15,
    height: 250,
  },
  mapitems: {
    marginRight: 15,
    height: 240,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    elevation: 4,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  maptext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  addbut: {
    height: 35,
    width: 35,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#09b866',
  },
  homescroll: {
    flexGrow: 1,
  },
  imglogin: {},
  scrollimg: {
    marginTop: 15,
    height: 170,
  },

  // =============================

  cardmap: {
    width: 170,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 230,
  },
  titlemap: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infomap: {
    fontSize: 14,
    marginTop: 5,
  },
  imagemap: {
    width: 100,
    height: 125,
    marginTop: 10,
  },
  pricemap: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green',
  },
  addbut2: {
    height: 35,
    width: 35,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#09b866',
  },
  changecolor: {
    backgroundColor: '#def9fa',
  },
  changecolor2: {
    backgroundColor: '#fadee9',
  },
  // +++++++++++++++++++++++

  thrdmap: {
    flexDirection: 'column',
    overflowX: 'scroll',
    backgroundColor: 'white',
    marginTop: 20,
  },
  thrdmap1: {
    flex: 0,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: 205,
  },
  thrdimg: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  thrdt1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  thrdt2: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  thrdt3: {
    fontSize: 14,
    color: 'green',
    marginTop: 4,
  },
  addbut3: {
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#09b866',
    width: 25,
    height: 25,
  },

  // ===============================

  container2: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    width: 200,
    height: 300,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    color: 'gray',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  kg: {
    fontSize: 16,
  },
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
    elevation: 10,
    borderColor: 'red',
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
  variants: {
    marginLeft: 10,
  },

  // ==========================
  needcontainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 5,
    height: 200,
  },
  needcardContainer: {
    flexDirection: 'row',
  },
  needcard: {
    marginTop: 8,
    marginRight: 20,
    padding: 10,
    borderRadius: 70,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  needimage: {
    width: 60,
    height: 45,
    borderRadius: 70,
  },
  needtitleHead: {
    fontWeight: 'bold',
    marginTop: 5,
    color: 'black',
    marginLeft: 6,
  },
  needtitle: {
    marginTop: 2,
    color: 'black',
    marginLeft: 6,
  },
  itemcontainer: {
    flex: 1,
    padding: 10,
    elevation: 5,
    backgroundColor: 'white',
    marginTop: 18,
  },
  itemparent: {
    marginTop: 20,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 10,
    alignItems: 'center',
  },
  itemimg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  itemtitle: {
    marginTop: 10,
    fontWeight: 'bold',
  },

  itemkg: {
    marginTop: 5,
  },
  itemprice: {
    marginTop: 5,
    color: 'green',
    fontWeight: 'bold',
  },

  enjoyModalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  enjoyModalContent: {
    backgroundColor: 'rgba(0, 128, 0, 0.9)',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  enjoyModalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Dailyes;
