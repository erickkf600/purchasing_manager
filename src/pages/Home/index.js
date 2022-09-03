import React, {useState, useEffect} from 'react';
import {
  Container,
  H1,
  Ul,
  Li,
  Text,
  Checkbox,
  Span,
  Button,
  Input,
} from './home.style';
import {TouchableWithoutFeedback, View} from 'react-native';
import {SafeAreaView, ScrollView} from 'react-native';
import {CustomIcon} from './../../assets/Icons/Icons';
import {useContext} from './../../providers/route-props';
import {useActiveIndex} from './../../providers/routeContext';
import realmList from './../../OfflineFirst/Services/ListService';

const Home = () => {
  const {list} = useContext();
  const {index} = useActiveIndex();

  const [qtd, setQtd] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    list.map((val) => {
      return setQtd(Math.max(0, val?.value));
    });
    setFilteredItems(
        list.filter((item) =>
        item.product.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);

  const changeQtd = async (value, i) => {
    const realm = await realmList();

    let result = realm.objects('List').find((row) => {
      return row.id == i;
    });
    realm.write(() => {
      result.value = value.toString();
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <H1>Lista de Compras</H1>

          <Input
            onChangeText={(e) => setSearch(e)}
            placeholder="Pesquisar..."
          />

          <Ul>
            {filteredItems.map((item, i) => (
              <TouchableWithoutFeedback key={i} onPress={() => alert('teste1')}>
                <Li>
                  <Span>
                    <Checkbox />
                    <Text>{item?.product}</Text>
                  </Span>

                  <Span>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setQtd(Math.max(0, qtd - 1)),
                          changeQtd(Math.max(0, qtd - 1), item?.id);
                      }}>
                      <Button>
                        <CustomIcon
                          style={{fontSize: 15, color: '#fff'}}
                          name="remove"
                        />
                      </Button>
                    </TouchableWithoutFeedback>
                    <Text>{qtd}</Text>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        setQtd(Math.max(0, qtd + 1)),
                          changeQtd(Math.max(0, qtd + 1), item?.id);
                      }}>
                      <Button>
                        <CustomIcon
                          style={{fontSize: 15, color: '#fff'}}
                          name="add"
                        />
                      </Button>
                    </TouchableWithoutFeedback>
                  </Span>
                </Li>
              </TouchableWithoutFeedback>
            ))}
          </Ul>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
